 
 
 
// Trong màn hình gốc
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(data: "Dữ liệu từ màn hình gốc"),
  ),
);


// Trong màn hình thứ nhất
var receivedData = await Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => SecondScreen(),
  ),
);

// Trong màn hình thứ hai
Navigator.pop(context, "Dữ liệu từ màn hình thứ hai");

// Trong màn hình gốc
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(
    builder: (context) => ThirdScreen(),
  ),
  (route) => false,
);

// Trong màn hình gốc
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(
    builder: (context) => ThirdScreen(),
  ),
  (route) => false,
);

