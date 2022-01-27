import {get_data, alter_data} from './lib/api'

async function main() {
    let data = await get_data()
    console.log('Starting Data:\n', data)
    console.log('Deleting first 3 records...')

    alter_data()
    data = await get_data()

    console.log('Ending Data:\n', data)
}

main().then(() => console.log('Finished'))