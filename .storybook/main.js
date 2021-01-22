module.exports = {
    stories: [
       '../stories/**/*.stories.(js|mdx)',
       '../packages/**/*.stories.(js|mdx)',
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
        '@storybook/addon-docs'
    ]
}