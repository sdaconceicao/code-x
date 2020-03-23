module.exports = {
    stories: [
       '../stories/**/*.stories.js',
       '../packages/**/*.stories.js(x)',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-storysource',
        '@storybook/addon-info'
    ]
}