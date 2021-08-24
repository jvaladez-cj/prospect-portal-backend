import { connect } from "mongoose";
import app from "./app";

const uri =
  "mongodb+srv://admintest:Credijusto2021@mylittlecluster.fogrj.mongodb.net/veterinaria?retryWrites=true&w=majority";

connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(db =>{
    console.log("Db is conected to " + db.connection.host);
    app.listen(app.get("port"),()=>{
        console.log("Server is running");
    });
});
