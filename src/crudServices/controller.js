import { db } from "../database/registry.js"
import fs from "fs";

export function CreateController(req, res){
    console.log("request by frontend", req.body);
    db.push(req.body)
    console.log("create")
    const current = __dirname;
    fs.writeFile(current + "../database/registry", ()=>console.log("chal"))
    res.status(200).json({response :db})
    res.end()
}