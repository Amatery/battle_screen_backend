import { MongoClient } from 'mongodb'
import { settings } from '../../settings'
import { PlayerViewModel } from '../models/PlayerModels/PlayerViewModel'


const client = new MongoClient(settings.CLUSTER_ACCESS_URL)

export const playersCollection = client.db().collection<PlayerViewModel>('players')

export const connectDB = async () => {
  try {
    await client.connect()
    console.log('✅ Connected to database successfully')
  } catch (e) {
    console.log(`👎 Something went wrong ${e}`)
    await client.close()
  }
}
