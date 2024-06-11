require ('dotenv').config();

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = process.env.PORT || 3000;
const Room = require('./models/model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRoutes);

// Definiendo las  Habitaciones
// ---------------------------
const capacity = [];

capacity.push (new Room (101, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (102, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (103, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (104, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (105, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (106, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (107, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (108, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (109, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (110, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (201, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (202, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (203, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (204, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (205, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (206, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (207, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (208, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (209, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (210, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (301, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (302, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (303, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (304, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (305, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (306, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (307, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (308, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (309, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (310, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (401, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (402, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (403, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (404, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (405, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (406, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (407, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (408, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (409, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (410, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (501, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (502, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (503, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (504, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (505, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (506, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (507, 'Hotel Miramar', 2, 2, 80,  'Standard'));
capacity.push (new Room (508, 'Hotel Miramar', 4, 2, 140, 'Gold'));
capacity.push (new Room (509, 'Hotel Miramar', 6, 2, 200, 'Platinum'));
capacity.push (new Room (510, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (601, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (602, 'Hotel Miramar', 8, 4, 400, 'Safiro'));
capacity.push (new Room (603, 'Hotel Miramar', 8, 4, 400, 'Safiro'));

capacity.push (new Room (101, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (102, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (103, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (104, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (105, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (106, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (107, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (108, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (109, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (110, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (201, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (202, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (203, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (204, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (205, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (206, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (207, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (208, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (209, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (210, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (301, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (302, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (303, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (304, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (305, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (306, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (307, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (308, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (309, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (310, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (401, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (402, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (403, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (404, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (405, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (406, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (407, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (408, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (409, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (410, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (501, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (502, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (503, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (504, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (505, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (506, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (507, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (508, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (509, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (510, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (601, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (602, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (603, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (604, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (605, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (606, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (607, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (608, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (609, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (610, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (701, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (702, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (703, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (704, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (705, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (706, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (707, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (708, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (709, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (710, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (801, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (802, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (803, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (804, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (805, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (806, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (807, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (808, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (809, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (810, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (901, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (902, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (903, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (904, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (905, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (906, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (907, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (908, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (909, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (910, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1001, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1002, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1003, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1004, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1005, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1006, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1007, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1008, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1009, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1010, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1101, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1102, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1103, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1104, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1105, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1106, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1107, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1108, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1109, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1110, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1201, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1202, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1203, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1204, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1205, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1206, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1207, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1208, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1209, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1210, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1301, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1302, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1303, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1304, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1305, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1306, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1307, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1308, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1309, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1310, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1401, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1402, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1403, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1404, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1405, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1406, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1407, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1408, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1409, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1410, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1501, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1502, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1503, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1504, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1505, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1506, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1507, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1508, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1509, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1510, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1601, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1602, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1603, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1604, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1605, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1606, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1607, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1608, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1609, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1610, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1701, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1702, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1703, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1704, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1705, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1706, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1707, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1708, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1709, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1710, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1801, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1802, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1803, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1804, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1805, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1806, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1807, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1808, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1809, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1810, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (1901, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1902, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1903, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1904, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1905, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (1906, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1907, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (1908, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (1909, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (1910, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (2001, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (2002, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (2003, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (2004, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (2005, 'Hotel Casino Enjoy', 4, 4, 140, 'Gold'));
capacity.push (new Room (2006, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (2007, 'Hotel Casino Enjoy', 2, 2, 80,  'Standard'));
capacity.push (new Room (2008, 'Hotel Casino Enjoy', 4, 2, 140, 'Gold'));
capacity.push (new Room (2009, 'Hotel Casino Enjoy', 6, 2, 200, 'Platinum'));
capacity.push (new Room (2010, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (2101, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (2102, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (2103, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));
capacity.push (new Room (2104, 'Hotel Casino Enjoy', 8, 4, 400, 'Safiro'));

capacity.forEach ((valor) => console.log(valor));
console.log ('Total de  Habitaciones -> ' + capacity.length);
module.exports = capacity;
// FIN Definiendo las  Habitaciones
// -------------------------------

app.listen(port, () => console.log('Open port -> ' + port));

// http:localhost:3001/api/usuario