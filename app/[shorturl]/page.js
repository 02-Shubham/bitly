import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = params.shorturl

    let client = await clientPromise;
    let db =client.db("bitly")
    let collection=db.collection("url")
    const doc=await collection.findOne({shorturl:shorturl})
    if(doc){
        redirect(doc.url)

    }else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post:{url}</div>
  }