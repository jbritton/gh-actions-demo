const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

async function run() {
    core.info('Running deploy-s3-js')

    // get input values
    const bucketName = core.getInput('bucket-name', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })

    // upload files
    await exec.exec(`echo "Uploading files from ${distFolder} to S3 bucket ${bucketName} in region ${bucketRegion}"`)
}

run();
