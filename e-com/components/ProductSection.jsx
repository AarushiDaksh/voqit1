import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const ProductSection = ({ title, products = [] }) => (
    <>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.product_container}>
            {products.map((product) => (
                <TouchableOpacity key={product.id} style={styles.product_card}>
                    <View>
                        <Image style={styles.img} source={{ uri: product.image }} />
                    </View>
                    <View>
                        <Text style={styles.product_name}>{product.name}</Text>
                        <Text style={styles.product_price}>{product.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    </>
);

const styles = StyleSheet.create({
    product_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    product_card: {
        padding: 15,
        borderWidth: 1,
        borderColor: "#aaa",
        marginBottom: 20,
        width: "45%"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15
    },
    img: {
        height: 100,
        width: 100
    },
    product_name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    product_price: {
        fontSize: 14,
        color: '#888',
    }
});