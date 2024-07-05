import React from "react";
import { View, Text, Image } from 'react-native'


type dataProp = {
    item: {
        category: string,
        description: string,
        id: number,
        image: string,
        price: number,
        rating: any,
        title: string
    }
}

const ProductItem = ({ item }: dataProp) => {
    return (
        <View style={{ width: "90%", alignSelf: 'center', backgroundColor: 'white', marginTop: 20, flexDirection: 'row' }}>
            <Image source={{ uri: item.image }} style={{ width: 60, height: 60 }} />
            <View style={{ marginLeft: 10, padding: 10 }}>
                <Text style={{ fontWeight: 400, width: '70%' }}>
                    {item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}
                </Text>
                <Text style={{ fontSize: 12, marginTop: 10, width: '80%' }}>
                    {item.description.length > 50 ? item.description.substring(0, 50) + "..." : item.description}
                </Text>
            </View>
        </View>
    )
}

export default ProductItem;