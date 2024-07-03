import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Invoice = () => {
  const invoiceDetails = {
    id: "12345",
    tenantName: "John Doe",
    amount: "$500",
    status: "Paid",
    date: "2024-07-01",
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/image/messages.png")}
        />
      </View>
      <View>
        <Text style={styles.text}>Your Invoice.</Text>
      </View>
      <View style={styles.invoiceContainer}>
        <View>
          <Text style={styles.invoiceText}>Id: {invoiceDetails.id}</Text>
          <Text style={styles.invoiceText}>
            Tenant: {invoiceDetails.tenantName}
          </Text>
          <Text style={styles.invoiceText}>
            Amount: {invoiceDetails.amount}
          </Text>
          <Text style={styles.invoiceText}>
            Status: {invoiceDetails.status}
          </Text>
          <Text style={styles.invoiceText}>Date: {invoiceDetails.date}</Text>
        </View>
      </View>
      <View style={styles.billButton}>
        <TouchableOpacity style={styles.button}>
          <Text>Add Bill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
  },
  imageContainer: {
    // height: 320,
    // width: 410,
  },
  image: {
    alignItems: "center",
    width: 410,
    height: 320,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
    left: 20,
  },
  invoiceContainer: {
    flexDirection: "column",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    width: 200,
    left: 20,
  },
  invoiceText: {
    fontSize: 18,
    color: "#333",
    marginVertical: 2,
    flexDirection: "column",
  },
  status: {
    backgroundColor: "green",
    color: "#000",
    borderRadius: 10,
    padding: 4,
  },
  button: {
    backgroundColor: "#cb19a2",
    color: "#000",
    borderRadius: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
  },
  billButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default Invoice;
