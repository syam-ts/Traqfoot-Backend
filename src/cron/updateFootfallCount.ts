import cron from "node-cron";
import dotenv from "dotenv";
import { SensorModel } from "../domain/entities/Sensor";

dotenv.config();

cron.schedule("0 * * * *", async () => {
    console.log("Running hourly sensor count updater...");

    try {
        const sensors = await SensorModel.find();

        const bulkUpdates = sensors.map((sensor) => {
            const randomIncrement = Math.floor(Math.random() * 500);

            return {
                updateOne: {
                    filter: { _id: sensor._id },
                    update: { $inc: { count: randomIncrement }, timestamp: Date.now() },
                },
            };
        });

        if (bulkUpdates.length > 0) {
            await SensorModel.bulkWrite(bulkUpdates);
        } else {
            console.log("No sensors found to update");
        }
    } catch (err) {
        console.error("Error during sensor count update:", err);
    }
});
