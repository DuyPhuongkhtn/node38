// cài thư viện express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
// npm i express nodemon prisma @prisma/client mysql2 dotenv graphql express-graphql
import express from 'express';
import {buildSchema} from 'graphql';
import {graphqlHTTP} from 'express-graphql'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const rootSchema = buildSchema(`

    type User {
        id: Int
        hoTen: String
    }

    type Video {
        video_id: Int
        video_name: String
        thumbnail: String
        description: String
        views: Int
        source: String
        user_id: Int
        type_id: Int
    }

    type rootMutation {
        createUser: String
        createVideo(video_name: String, thumbnail: String, description: String, views: Int, source: String, user_id: Int, type_id: Int): Boolean
        updateVideo(video_id: Int, video_name: String, thumbnail: String, description: String, views: Int, source: String, user_id: Int, type_id: Int): Boolean
    }

    type rootQuery {
        getUser(id: String, hoTen: String): User
        getListVideo(videoType: Int): [Video]
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`)

const resolver = {
    getUser: ({id, hoTen}) => {
        return {
            id: id,
            hoTen: hoTen
        }
    },

    createUser: () => {
        return "createUser"
    },

    getListVideo: async ({videoType}) => {
        let data = await prisma.video.findMany({
            where: {
                type_id: videoType
            }
        });
        return data
    },

    createVideo: async ({video_name, thumbnail, description, views, source, user_id, type_id}) => {
        try {
            let newVideo = {
                video_name,
                thumbnail,
                description,
                views,
                source,
                user_id,
                type_id
            }
    
            await prisma.video.create({
                data: newVideo
            })
            return true
        } catch(err) {
            console.log(err);
            return false
        }
    },
    updateVideo: async({video_id, video_name, thumbnail, description, views, source, user_id, type_id}) => {
        try {
            let checkVideo = await prisma.video.findFirst({
                where: {
                    video_id: video_id
                }
            })
            
            if(!checkVideo){
                return false
            }
    
            let updateVideo = {
                video_id,
                video_name,
                thumbnail,
                description,
                views,
                source,
                user_id,
                type_id
            }

            await prisma.video.update({
                where: {
                    video_id: video_id
                },
                data: updateVideo
            })
            return true
        } catch (err) {
            console.log(err);
            return false
        }
    }

}

const app = express();
app.use("/graph", graphqlHTTP({
    schema: rootSchema, // định nghĩa schema cho BE và FE xài
    rootValue: resolver, // định nghĩa function cho các API
    graphiql: true // chỉ dùng cho môi trường dev
}))

app.listen(8081, () => {
    console.log("BE starting with port 8081")
})

// B1: npx prisma init
// b2: sửa connection string ở trong file .env và schema.prisma
// B3: npx prisma db pull
// B4: npx prisma generate -> tạo prisma client
// B5: import prisma client cho những nơi nào cần
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()