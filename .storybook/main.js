module.exports = {
    stories: [
       '../stories/**/*.stories.js',
       '../packages/**/*.stories.(js|mdx)',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-storysource',
        '@storybook/addon-docs'
    ]
}