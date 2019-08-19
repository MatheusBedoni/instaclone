import React , { useState , useEffect }from 'react'
import { View, FlatList } from 'react-native'
import { Post, Header, Avatar , Nome , PostImage , Desc } from './styles';

export default function Feeds(){
    const [feed, sedFeed] = useState([])
    const [page, setPage] = useState(1);

   
    useEffect(() => {
        async function loadfeed(){
    
            const response = await fetch(
                `http://localhost:3000/feed?_expand=author&_limit=20&page=1`
            )
            const data = await response.json()
           
            sedFeed(data)
         
        }
        loadfeed()
    },[])
    return(
        <View>
            <FlatList
            data={feed}
            keyExtractor={post => String(post.id)}
            renderItem={({ item }) => (
                <Post>
                    <Header>
                        <Avatar source={{ uri: item.author.avatar}} />
                        <Nome>{item.author.name}</Nome>
                    </Header>

                    <PostImage aspectRatio={item.aspectRatio} source={{ uri: item.image }} />

                    <Desc>
                        <Nome>
                            {item.author.name}
                        </Nome>
                        {item.description}
                    </Desc>
                </Post>
            )}
            />
        </View>
    );
}
