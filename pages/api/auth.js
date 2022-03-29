import axios from "axios"

export default function auth(){
    return(
        axios({
            method: 'post',
               url: 'https://dev-mrp.insby.tech/api/init/app',
               data: {
                    uuid: 'mladjan',
                    uuidOS: 'Windows'
        },
                auth: {
                    username: 'rXLHTc7OSllRAFQIaGof660V80a3b9LeMVbHkCyHUPY5DvV2f29Fy1psXhQMdtjuocJeYcMSPxSYlksGHTL5M6YsafbNw34NexqXqfrSd',
                    password: 'SnlZH8fMs0H48S0sLcuO05WMoH8GvNPgko6RqSfvZCX2kp3P2q0583QLqZWw90eyRkXiwss5pjFqhO9Lmjd1lW3fHHQdrze3HJrlUCsJp6h'
                }
            })  
    )
}