#!/usr/bin/env node

/* eslint-disable no-path-concat */

const cp = require('child_process')
const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')

const exec = path.resolve(__dirname + '/www.js')
// Initialize watcher.
const watcher = chokidar.watch(__dirname + '/src', {
  //  eslint-disable-next-line no-useless-escape
  ignored: /[\\\/](node_modules|public|__tests__)[\\\/]/,
  persistent: true,
  ignoreInitial: false
})

watcher.once('ready', () => {
  console.log('\n', chalk.magenta(' => Initialize app ... => '))
  const watched = watcher.getWatched()
  Object.keys(watched).forEach(k => {
    const values = watched[k]
    values.forEach(p => {
      console.log(chalk.yellow(path.resolve(k + '/' + p)))
    })
  })

  function launch() {
    const k = cp.spawn('node', [exec], {
      env: Object.assign({}, process.env, {
        // Your values here
      })
    })

    k.on('error', err => {
      console.log(' => Server error =>', err.stack || err)
    })

    k.stdout.setEncoding('utf8')
    k.stderr.setEncoding('utf8')

    k.stdout.pipe(process.stdout)
    k.stderr.pipe(process.stderr)

    return k
  }

  let k = launch()

  process.stdin.resume()
  process.stdin.setEncoding('utf8')

  function killAndRestart() {
    k.once('close', () => {
      k.removeAllListeners()
      k.unref()
      setTimeout(() => {
        // Arbitrary timeout seems necessary => even after the 'close' event, still get
        // some port conflicts, not entirely sure why
        k = launch()
        console.log(' => New process pid =>', k.pid)
      }, 300)
    })
    k.kill('SIGINT')
  }

  process.stdin.on('data', d => {
    if (String(d).trim() === 'rs') {
      console.log(' => relaunching dev server')
      killAndRestart()
    }
  })

  watcher.on('add', path => {
    console.log(' => watched file added =>', path)
    console.log(' => restarting server')
    killAndRestart()
  })

  watcher.on('change', path => {
    console.log(' => watched file changed =>', path)
    console.log(' => restarting server')
    killAndRestart()
  })
})
