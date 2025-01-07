import React from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Thư viện icon (nếu cần)

// Dữ liệu mẫu cho danh sách thông báo
const notifications = [
  { id: "1", icon: "checkmark-circle", title: "Bước 1: Xác định nhu cầu", description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00", date: "20/08/2020, 06:00" },
  { id: "2", icon: "people", title: "Bạn có khách hàng mới!", description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.", date: "20/08/2020, 06:00" },
  { id: "3", icon: "people", title: "Khách hàng được chia sẻ bị trùng", description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.", date: "20/08/2020, 06:00" },
  { id: "4", icon: "checkmark-circle", title: "Công việc sắp đến hạn hôm nay", description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.", date: "20/08/2020, 06:00" },
];

// Component từng thông báo
const NotificationItem = ({ icon, title, description, date }) => {
  return (
    <View style={styles.itemContainer}>
      <Ionicons name={icon} size={24} color="#007AFF" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

// Màn hình danh sách thông báo
const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            icon={item.icon}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
        contentContainerStyle={styles.listContent} // Khoảng cách phía trên danh sách
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Khoảng cách giữa các item
      />
    </SafeAreaView>
  );
};

// Style của ứng dụng
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingTop: 20, // Khoảng cách phía trên danh sách
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  separator: {
    height: 10, // Khoảng cách giữa các item
  },
});

export default NotificationsScreen;
