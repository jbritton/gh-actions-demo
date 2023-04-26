const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

async function run() {
    core.info('Running deploy-s3-js')

    // print environment variables
    core.info(`AWS_ACCESS_KEY_ID: ${process.env.AWS_ACCESS_KEY_ID}`)
    core.info(`AWS_SECRET_ACCESS_KEY: ${process.env.AWS_SECRET_ACCESS_KEY}`)

    // get input values
    const bucketName = core.getInput('bucket-name', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })

    // upload files
    await exec.exec(`echo "Uploading files from ${distFolder} to S3 bucket ${bucketName} in region ${bucketRegion}"`)

    const websiteUrl = `https://${bucketName}.s3-website-${bucketRegion}.amazonaws.com`
    core.setOutput('website-url', websiteUrl)
}

run();
