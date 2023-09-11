import express, { Application, Request,Response} from "express";
import { config } from "dotenv";
config();

const app: Application = express();
app.use(express.json());

//port 
const PORT = process.env.PORT || 4001;

app.route("/").get((req: Request, res: Response) => {
  res.send("Ok")
})


function appStart() {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}
appStart();
