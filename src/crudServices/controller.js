import { db } from "../database/registry.js"

export function CreateController(req, res){
    const request = JSON.parse(req)
    console.log("request by frontend", request.body);
    db.push()
    console.log("create")
}