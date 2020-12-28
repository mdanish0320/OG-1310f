$(document).ready(function(){



make_id = ['temporary_value'];


index_of_model = ['1001','1002','1003','1004','1005','1006','2001','2002','2003','2004','2005','2006','3001','3002','3003','3004','3005','3006','4001','4002','4003','4004','4005','4006',

'5001','5002','5003','5004','5005','5006','6001','6002','6003','6004','6005','6006','7001','7002','7003','7004','7005','7006','8001','8002','8003','8004','8005','8006',

'9001','9002','9003','9004','9005','9006','1101','1102','1103','1104','1105','1106','1201','1202','1203','1204','1205','1206','1301','1302','1303','1304','1305','1306',

'1401','1402','1403','1404','1405','1406','1501','1502','1503','1504','1505','1506','1601','1602','1603','1604','1605','1606','1701','1702','1703','1704','1705','1706'
 ];
 

desktop_wd = ['---------------Model---------------','1001','1002','1003','1004','1005','1006'];
passport_wd = ['---------------Model---------------','9001','9002','9003','9004','9005','9006'];
pen_drive_wd = ['---------------Model---------------','5001','5002','5003','5004','5005','5006'];
optical_wd = ['---------------Model---------------','1401','1402','1403','1404','1405','1406'];

desktop_g = ['---------------Model---------------','4001','4002','4003','4004','4005','4006'];
passport_g = ['---------------Model---------------','1101','1102','1103','1104','1105','1106'];
pen_drive_g = ['---------------Model---------------','6001','6002','6003','6004','6005','6006'];
optical_g = ['---------------Model---------------','1501','1502','1503','1504','1505','1506'];

desktop_max = ['---------------Model---------------','2001','2002','2003','2004','2005','2006'];
passport_max = ['---------------Model---------------','1201','1202','1203','1204','1205','1206'];
pen_drive_max = ['---------------Model---------------','7001','7002','7003','7004','7005','7006'];
optical_max = ['---------------Model---------------','1601','1602','1603','1604','1605','1606'];

desktop_sea = ['---------------Model---------------','3001','3002','3003','3004','3005','3006'];
passport_sea = ['---------------Model---------------','1301','1302','1303','1304','1305','1306'];
pen_drive_sea = ['---------------Model---------------','8001','8002','8003','8004','8005','8006'];
optical_sea = ['---------------Model---------------','1701','1702','1703','1704','1705','1706'];


product_brand_index =['desktop_wd','passport_wd','pen_drive_wd','optical_wd','desktop_g','passport_g','pen_drive_g','optical_g','desktop_max','passport_max','pen_drive_max','optical_max','desktop_sea','passport_sea','pen_drive_sea','optical_sea'];

product_brand_val_index =[desktop_wd,passport_wd,pen_drive_wd,optical_wd,desktop_g,passport_g,pen_drive_g,optical_g,desktop_max,passport_max,pen_drive_max,optical_max,desktop_sea,passport_sea,pen_drive_sea,optical_sea];


des_of_prod =['<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto2TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>7200RPM</td></tr><tr><td>Transfer Rate</td><td>256Mb/s</td></tr><tr><td>Price </td><td> $749.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto 2TB</td></tr><tr><td>Interface</td><td>4xThunderbolt</td></tr><tr><td>HDD</td><td>8200RPM</td></tr><tr><td>Transfer Rate</td><td>356Mb/s</td></tr><tr><td>Price </td><td> $849.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto 1TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>6200RPM</td></tr><tr><td>Transfer Rate</td><td>200Mb/s</td></tr><tr><td>Price</td><td> $649.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto 3TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>520RPM</td></tr><tr><td>Transfer Rate</td><td>250Mb/s</td></tr><tr><td>Price</td><td>$549.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto 1TB</td></tr><tr><td>Interface </td><td> 1xThunderbolt</td></tr><tr><td>HDD</td><td>4200RPM</td></tr><tr><td>Transfer Rate</td><td>300Mb/s</td></tr><tr><td>Price</td><td>$449.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity</td><td>upto 1TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>6200RPM</td></tr><tr><td>Transfer Rate</td><td>200Mb/s</td></tr><tr><td>Price</td><td> $649.95</td></tr>',

'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto2TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>745RPM</td></tr><tr><td>Transfer Rate</td><td>234Mb/s</td></tr><tr><td>Price </td><td> $234.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto 4TB</td></tr><tr><td>Interface</td><td>4xThunderbolt</td></tr><tr><td>HDD</td><td>3245RPM</td></tr><tr><td>Transfer Rate</td><td>345Mb/s</td></tr><tr><td>Price </td><td> $654.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto 6TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>3242RPM</td></tr><tr><td>Transfer Rate</td><td>456Mb/s</td></tr><tr><td>Price</td><td> $324.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto 8TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>544PM</td></tr><tr><td>Transfer Rate</td><td>844Mb/s</td></tr><tr><td>Price</td><td>$733.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto 9TB</td></tr><tr><td>Interface </td><td> 1xThunderbolt</td></tr><tr><td>HDD</td><td>754RPM</td></tr><tr><td>Transfer Rate</td><td>345Mb/s</td></tr><tr><td>Price</td><td>$733.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity</td><td>upto 7TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>6230RPM</td></tr><tr><td>Transfer Rate</td><td>734Mb/s</td></tr><tr><td>Price</td><td> $253.95</td></tr>',

'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto7TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>7345RPM</td></tr><tr><td>Transfer Rate</td><td>2346Mb/s</td></tr><tr><td>Price </td><td> $357.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto 5TB</td></tr><tr><td>Interface</td><td>4xThunderbolt</td></tr><tr><td>HDD</td><td>6345RPM</td></tr><tr><td>Transfer Rate</td><td>956Mb/s</td></tr><tr><td>Price </td><td> $734.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto 4TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>2345RPM</td></tr><tr><td>Transfer Rate</td><td>700Mb/s</td></tr><tr><td>Price</td><td> $457.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto 2TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>5345RPM</td></tr><tr><td>Transfer Rate</td><td>550Mb/s</td></tr><tr><td>Price</td><td>$875.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto 4TB</td></tr><tr><td>Interface </td><td> 1xThunderbolt</td></tr><tr><td>HDD</td><td>46435PM</td></tr><tr><td>Transfer Rate</td><td>300Mb/s</td></tr><tr><td>Price</td><td>$444.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity</td><td>upto 9TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>6200RPM</td></tr><tr><td>Transfer Rate</td><td>100Mb/s</td></tr><tr><td>Price</td><td> $345.95</td></tr>',

'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto1TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>7200RPM</td></tr><tr><td>Transfer Rate</td><td>256Mb/s</td></tr><tr><td>Price </td><td> $734.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto 3TB</td></tr><tr><td>Interface</td><td>4xThunderbolt</td></tr><tr><td>HDD</td><td>7345RPM</td></tr><tr><td>Transfer Rate</td><td>8006Mb/s</td></tr><tr><td>Price </td><td> $863.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto 5TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>435RPM</td></tr><tr><td>Transfer Rate</td><td>600Mb/s</td></tr><tr><td>Price</td><td> $235.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto 7TB</td></tr><tr><td>Interface</td><td>2xThunderbolt</td></tr><tr><td>HDD</td><td>734RPM</td></tr><tr><td>Transfer Rate</td><td>400Mb/s</td></tr><tr><td>Price</td><td>$343.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto 1TB</td></tr><tr><td>Interface </td><td> 1xThunderbolt</td></tr><tr><td>HDD</td><td>4634RPM</td></tr><tr><td>Transfer Rate</td><td>300Mb/s</td></tr><tr><td>Price</td><td>$345.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity</td><td>upto 2TB</td></tr><tr><td>Interface</td><td> 2xThunderbolt</td></tr><tr><td>HDD</td><td>345RPM</td></tr><tr><td>Transfer Rate</td><td>200Mb/s</td></tr><tr><td>Price</td><td> $649.95</td></tr>',




'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>2GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>3GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>4GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>5GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>6GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>7GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',

'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>7GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>6GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>5GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>4GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>3GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>G-technolog</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>2GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',

'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>3GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>5GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>6GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>1GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td>Maxtor<td>USB bus power</td></tr><tr><td>Capacity</td><td>2GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>4GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',

'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>1GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>5GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>2GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>3GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 2.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>6GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>2 years</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Interface </td><td>High Speed USB 3.0</td></tr><tr><td>Port Type</td><td>Type A USB port</td></tr><tr><td>Power Supply </td><td>USB bus power</td></tr><tr><td>Capacity</td><td>7GB</td></tr><tr><td>Technology</td><td>Chip Board</td></tr><tr><td>Warranty </td><td>1 years</td></tr>',


'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 1TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7300RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 176MB/s</td></tr><tr><td>Price</td><td>$719.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 2TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 8200RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 166MB/s</td></tr><tr><td>Price</td><td>$619.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 3TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7400RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 156MB/s</td></tr><tr><td>Price</td><td>$519.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 4TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 5200RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 146MB/s</td></tr><tr><td>Price</td><td>$519.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 5TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7600RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 1326MB/s</td></tr><tr><td>Price</td><td>$419.95</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Capacity </td><td>Upto 6TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 8200RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 196MB/s</td></tr><tr><td>Price</td><td>$319.95</td></tr>',

'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 6TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7800RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 236MB/s</td></tr><tr><td>Price</td><td>$619.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 5TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 7700RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 336MB/s</td></tr><tr><td>Price</td><td>$519.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 4TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7600RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 436MB/s</td></tr><tr><td>Price</td><td>$419.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 3TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 7500RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 536MB/s</td></tr><tr><td>Price</td><td>$319.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 2TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 7400RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 636MB/s</td></tr><tr><td>Price</td><td>$219.95</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Capacity </td><td>Upto 1TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 7300RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 736MB/s</td></tr><tr><td>Price</td><td>$119.95</td></tr>',

'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 4TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 6540RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 136MB/s</td></tr><tr><td>Price</td><td>$232.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 3TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 2340RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 345MB/s</td></tr><tr><td>Price</td><td>$345.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 2TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 3450RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 354MB/s</td></tr><tr><td>Price</td><td>$543.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 1TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 5340RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 635MB/s</td></tr><tr><td>Price</td><td>$264.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 6TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 3240RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 364MB/s</td></tr><tr><td>Price</td><td>$643.95</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Capacity </td><td>Upto 5TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 2430RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 643MB/s</td></tr><tr><td>Price</td><td>$219.95</td></tr>',

'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 4TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 6734RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 567MB/s</td></tr><tr><td>Price</td><td>$234.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 5TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 7343RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 754MB/s</td></tr><tr><td>Price</td><td>$643.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 6TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 2346RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 475MB/s</td></tr><tr><td>Price</td><td>$452.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 1TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 5342RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 475MB/s</td></tr><tr><td>Price</td><td>$435.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 2TB</td></tr><tr><td>Interface</td><td>1xUSB 3.0</td></tr><tr><td>HDD</td><td> 3452RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 365MB/s</td></tr><tr><td>Price</td><td>$723.95</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Capacity </td><td>Upto 3TB</td></tr><tr><td>Interface</td><td>1xUSB 2.0</td></tr><tr><td>HDD</td><td> 4356RPM </td></tr><tr><td>Transfer Rate</td><td>Upto 743MB/s</td></tr><tr><td>Price</td><td>$733.95</td></tr>',




'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 150ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>2 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 500 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 350ms &nbsp; CD: 450ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>4 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 100 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 550ms &nbsp; CD: 650ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>6 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 200 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 750ms &nbsp; CD: 850ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>8 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 500 MHz or higher </td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 150ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>10 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 600 MHz or higher </td></tr>',
'<tr><td>Brand</td><td>Western Digital</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 150ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>12 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 900 MHz or higher</td></tr>',

'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 850ms &nbsp; CD: 950ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>12 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 400 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 650ms &nbsp; CD: 750ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>10 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 200 MHz or higher </td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 450ms &nbsp; CD: 550ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>8 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 700 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 350ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>6 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 500 MHz or higher </td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 150ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>4 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 300 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>G-technology</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 150ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>2 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 900 MHz or higher</td></tr>',

'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 750ms &nbsp; CD: 650ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>1 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 1000 MHz or higher </td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 950ms &nbsp; CD: 850ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>3 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 900 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 550ms &nbsp; CD: 450ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>5 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 800 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 350ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>7 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 600 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 150ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>9 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 400 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Maxtor</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 150ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>11 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 200 MHz or higher</td></tr>',

'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 150ms &nbsp; CD: 250ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>11 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 200 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 150ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>9 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 400 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 350ms &nbsp; CD: 450ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>7 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 600 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 550ms &nbsp; CD: 650ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>5 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 800 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 750ms &nbsp; CD: 850ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>3 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 1000 MHz or higher</td></tr>',
'<tr><td>Brand</td><td>Seagate</td></tr><tr><td>Access time:</td><td>DVD: 250ms &nbsp; CD: 150ms </td></tr><tr><td>Interface:</td><td> SATA</td></tr><tr><td>Data Buffer: </td><td>1 MB</td></tr><tr><td>Processor requirement:</td><td> Pentium 1200 MHz or higher</td></tr>'

];

loop_model_no = new Array();

pic_name=['1.png','2.png','3.png','4.png','5.png','6.png'];


$('#one , #three').change(function(){
		
		check_parent = $(this).parent().attr('id');
		
		if(check_parent == 'selct1'){
			
			
			change1 = $('#selct2 select'); 
			change2 = $('#selct_3 select');
			change3 = $('#two');
			change4 = $('#pix ,#description1');
			change5 = $('#description1 table');
			change6 = $('#pix');
			change7 = $('#main_pic');
			
			}else{
				
			change1 = $('#selct4 select'); 
			change2 = $('#selct_6 select');
			change3 = $('#four');
			change4 = $('#pix2 ,#description2');
			change5 = $('#description2 table');
			change6 = $('#pix2');
			change7 = $('#main_pic2');
			}
		
		
		default_val=change1.children('option').eq(0).val();
		change1.val(default_val);
		
		default_val=change2.children('option').eq(0).val();
		change2.val(default_val);

		change3.removeAttr('disabled');
		change2.attr('disabled','disabled');
		prodct=$(this).val();
		
		change4.css('border',' 0px solid');
		change5.empty();
		change6.empty();
		change7.empty();
		$(change8).css('background','transparent');
		

});


$('#two , #four').change(function(){
	
		
		check_parent = $(this).parent().attr('id');
		
		
		
		if(check_parent == 'selct2'){
			
			
			change1 = $('#selct2 select'); 
			change2 = $('#selct_3 select');
			change3 = $('#two');
			change4 = $('#pix ,#description1');
			change5 = $('#description1 table');
			change6 = $('#pix');
			change7 = $('#main_pic');
			change8 = $('#description1');
			change9 = $('#left_pic');
		    change10= $('#three_3');
			change11= $('#selct_3');
			}else{
				
			change1 = $('#selct4 select'); 
			change2 = $('#selct_6 select');
			change3 = $('#four');
			change4 = $('#pix2 ,#description2');
			change5 = $('#description2 table');
			change6 = $('#pix2');
			change7 = $('#main_pic2');
			change8 = $('#description2');
			change9 = $('#right_pic');
		    change10= $('#six_6');	
			change11= $('#selct_6');
				
			}
		
		
		
	    	change8.css('border',' 0px solid');
			change5.empty();
			change6.empty();
			change7.empty();
			change2.removeAttr('disabled');
			$(change8).css('background','transparent');
			default_val=$(change2).children('option').eq(0).val();
			$(change2).val(default_val);
			comp=$(this).val();	
			make_id[0] = prodct +'_'+comp;
			kaka = $.inArray(make_id[0],product_brand_index);
		
		if(kaka != -1){
		 	
			a=product_brand_val_index[kaka];
			$(change2).empty();
		
					for(i=0;i<7;i++){
			
							$("<option value='"+ (i) +".png'>"+ a[i]  +"</option>").appendTo( change2 );
			
			
					}
		}else{
			
			$(change2).attr('disabled','disabled').append("<option>---------------Model---------------</option>");
		}
		
		change6.css('border','1px solid #09F');		
		change9.css('-webkit-transition','width 1s ease').css('visibility','visible');

				
		for(i=0;i<6;i++){
			
			
			loop_model_no[i] = change2.children('option').eq(i+1).text();
			
		}
		
		$(this).parent().next().next().next().find('#'+make_id).css('display','block');
		
		change10.removeAttr('disabled');
		
		select_list();	

});

c=0;	
function select_list(){

		change6.empty();

		change7.empty();

		
		for (i=0;i<pic_name.length;i++){
	
					
					$("<img data-model='"+ loop_model_no[i] +"' src='images\\"+comp+'\\'+prodct+'\\'+pic_name[i]+"' />").appendTo(change6).css('display','none').fadeIn(1000);	

		}


		change6.children('img').error(function() {
			
			$(this).remove();
            
        });
		
		
		
		$('#pix , #pix2').children('img').mouseover(function(){

					
					check_parent = $(this).parent().attr('id');
		
		
		
						if(check_parent == 'pix'){
							
							
							change1 = $('#selct2 select'); 
							change2 = $('#selct_3 select');
							change3 = $('#two');
							change4 = $('#pix ,#description1');
							change5 = $('#description1 table');
							change6 = $('#pix');
							change7 = $('#main_pic');
							change8 = $('#description1');
							change9 = $('#left_pic');
							change10= $('#three_3');
							change11= $('#selct_3');
							}else{
								
							change1 = $('#selct4 select'); 
							change2 = $('#selct_6 select');
							change3 = $('#four');
							change4 = $('#pix2 ,#description2');
							change5 = $('#description2 table');
							change6 = $('#pix2');
							change7 = $('#main_pic2');
							change8 = $('#description2');
							change9 = $('#right_pic');
							change10= $('#six_6');	
							change11= $('#selct_6');
								
							}
							
					default_val=change2.children('option').eq(0).val();
					change2.val(default_val);		
		
					
					$(change6).children('img').removeClass('filter_brightness');

					$(this).addClass('filter_brightness');
					
					$(change8).css('background','white');
					
					model_no=$(this).data('model');
					
					model_place = $.inArray($.trim(model_no),index_of_model);

					change5.html(des_of_prod[model_place]);
					change8.css('border','2px solid #09F');
					
					c++;
					
					change7.children('img').not('#a'+c).fadeTo(1000,0,function(){
						
					change7.children('img').not('#a'+c).remove();	
						
						});

					pic_src=$(this).attr('src');

					$("<img id='a"+c+"' src='"+pic_src+"' />").appendTo(change7).css('opacity','0').fadeTo(1000,1);
						
		});
	
}
		
d=0;
$('#selct_3 select , #selct_6 select').change(function(){
	

check_parent = $(this).parent().attr('id');
		
		
		
		if(check_parent == 'selct_3'){
			
			
			change1 = $('#selct2 select'); 
			change2 = $('#selct_3 select');
			change3 = $('#two');
			change4 = $('#pix ,#description1');
			change5 = $('#description1 table');
			change6 = $('#pix');
			change7 = $('#main_pic');
			change8 = $('#description1');
			change9 = $('#left_pic');
		    change10= $('#three_3');
			}else{
				
			change1 = $('#selct4 select'); 
			change2 = $('#selct_6 select');
			change3 = $('#four');
			change4 = $('#pix2 ,#description2');
			change5 = $('#description2 table');
			change6 = $('#pix2');
			change7 = $('#main_pic2');
			change8 = $('#description2');
			chagne9 = $('#right_pic');
		    change10= $('#six_6');	
			
				
				}
				
$(change6).children('img').removeClass('filter_brightness');				

change8.css('border','2px solid #09F');

model_no=$(this).find('option:selected').text();

model_place = $.inArray(model_no,index_of_model);

change5.html(des_of_prod[model_place]);

d++;
	
$(change8).css('background','white');

change7.children('img').not('#next'+d).fadeOut(1000,function(){
		
		change7.children('img').not('#next'+d).remove();
		
		})


	
	$("<img id='next"+ d + "' src='images\\"+comp+'\\'+prodct+'\\'+$(this).val()+"' />").appendTo(change7).css('display','none').fadeIn(1000);

	
});

	
	
	});
