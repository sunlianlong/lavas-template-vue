/**
 * @file lavas config
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

'use strict';

const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    build: {
        ssr: false,
        path: BUILD_PATH,
        publicPath: '/',
        cssExtract: true
    },
    router: {
        mode: 'history',
        base: '/',
        pageTransition: {
            type: 'fade',
            transitionClass: 'fade'
        }
    },
    serviceWorker: {
        swSrc: path.join(__dirname, 'entries/[entryName]/service-worker.js'),
        swDest: path.join(BUILD_PATH, '[entryName]/service-worker.js'),
        // swPath: '/custom_path/', // specify custom serveice worker file's path, default is publicPath
        globDirectory: BUILD_PATH,
        globPatterns: [
            // '[entryName].html',
            '**/*.{html,js,css,eot,svg,ttf,woff}'
        ],
        globIgnores: [
            '**/service-worker.js',
            '**/sw-register.js',
            '**/*.map'
        ],
        dontCacheBustUrlsMatching: /\.\w{8}\./
    },
    // you can also use serviceWorker config here
    entries: [
        {
            name: 'detail',
            skeleton: {
                enable: true,
                routes: [
                    {
                        path: '/detail/:id',
                        componentPath: 'entries/detail/DetailSkeleton.vue'
                    },
                    {
                        path: '*',
                        componentPath: 'entries/detail/Skeleton.vue'
                    }
                ]
            }
        },
        {
            name: 'index',
            skeleton: {
                enable: true,
                routes: [
                    {
                        path: '*',
                        componentPath: 'entries/index/Skeleton.vue'
                    }
                ]
            }
        }
    ]
};
