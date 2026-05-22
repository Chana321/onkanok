  const DATA = [     
      { title:'ติดถนน แม่ทะ-บ้านกล้วย', img:'img/44.webp', map:'https://maps.app.goo.gl/fDf4KGpGXNbWGr36A',  loc:'ต.กล้วยแพะ อ.เมือง ลำปาง', priceNum:290000, price:'290,000', type:'landhouse', area:'74 ตร.ว.', desc:'ที่ดินทำเลดี เนื้อที่ 74 ตร.ว หน้ากว้าง 40 เมตร  ติดถนนสายหลักแม่ทะ–บ้านกล้วย เดินทางสะดวกรถสัญจรผ่านตลอด \n\n- ลงตัวทั้งปลูกบ้าน/ทำธุรกิจ หรือเก็งกำไรในอนาคต\n- หน้ากว้าง 40 เมตรหาได้ยาก \n - ราคาเพียง 290,000 บาท (ราคานี้รวมโอน) ', gallery:['img/1/3.webp','img/1/1.webp','img/1/2.webp'] },
      { title:'โซน อบต.พิชัย', img:'img/36.webp', map:'https://maps.app.goo.gl/hMaGuCi4Rhc63veq8',  loc:'ต.พิชัย อ.เมือง ลำปาง', priceNum:590000, price:'590,000', type:'landhouse', area:'77 ตร.ว.', desc:'ที่ดินถมแล้วพร้อมปลูกสร้าง ใกล้ อบต.พิชัย  เนื้อที่ 77 ตร.ว บรรยากาศเงียบสงบไม่ไกลตัวเมือง  \n\n- ถนนลาดยาง/ไฟฟ้า/น้ำประปา \n- น้ำประปา/ไฟฟ้า \n- มีรั้วเดิมล้อมทุกด้าน\n- แปลงหัวมุม \n- ราคาเพียง 590,000 บาท (ราคานี้รวมโอน)', gallery:['img/26/1.webp','img/26/2.webp','img/26/3.webp','img/26/4.webp'] },
      { title:'พรประสิทธิ์ซอย 4', img:'img/11.webp', map:'https://maps.app.goo.gl/kmFYBmS5oXuTw88Q9',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:890000, price:'890,000', type:'landhouse', area:'107 ตร.ว.', desc:'ที่ดินถมแล้วเนื้อที่ 107 ตร.ว หมู่บ้านพรประสิทธิ์ ซอย4  ทำเลน่าอยู่ เงียบสงบ เดินทางสะดวกใกล้ตัวเมืองมาก \n\n-  เหมาะสร้างบ้านหรือเก็บลงทุนระยะยาว \n- ราคา 890,000 บาท (ราคานี้รวมโอนแล้ว)', gallery:['img/4/1.webp','img/4/2.webp','img/4/3.webp','img/4/4.webp'] },
      { title:'หมู่บ้านเด่นสโรชา', img:'img/88.webp', map:'https://maps.app.goo.gl/v6auFGytfLS6wrFo6',  loc:'ต.พิชัย อ.เมือง ลำปาง', priceNum:450000, price:'450,000', type:'landhouse', area:'99 ตร.ว.', desc:'ที่ดินราคาดี (อยู่ในหมู่บ้านเด่นสโรชา) เนื้อที่ 99 ตร.ว บรรยากาศเงียบสงบเหมาะสำหรับปลูกบ้านอยู่อาศัย \n\n- หน้ากว้าง 20 เมตร ลึก 19 เมตร \n- น้ำประปา/ไฟฟ้า/ถนนลาดยางครบ \n- เดินทางเข้าออกสะดวกเข้าตัวเมืองแค่ 7 นาที', gallery:['img/2/1.webp','img/2/2.webp','img/2/3.webp','img/2/4.webp'] },
      { title:'ที่ 2 แปลงโซนบ้านศรีสง่า', img:'img/14.webp', map:'https://maps.app.goo.gl/s1cPxfjVnTSGaHTX6',  loc:'ต.ปงแสงทอง อ.เมือง ลำปาง', priceNum:450000, price:'450,000', type:'landhouse', area:'100 ตร.ว.', desc:'ที่ดินถมแล้ว 2 แปลงติดกัน ใกล้บ้านศรีสง่า ต.ปงแสงทอง จ.ลำปาง เนื้อที่แปลงละ 100 ตร.ว  \n\n- หน้ากว้าง 16 เมตร ลึก 25 เมตร \n- น้ำประปา/ไฟฟ้า \n- ลงตัวทั้งปลูกบ้าน/ทำธุรกิจ\n- ซื้อ 2 แปลงมีราคาพิเศษ', gallery:['img/5/0.webp','img/5/3.webp','img/5/1.webp','img/5/2.webp'] },
      { title:'เจน&จอย 2', img:'img/13.webp', map:'https://maps.app.goo.gl/HtCdcrpQBKBStvmJ7?g_st=ac',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:490000, price:'490,000', type:'landhouse', area:'90 ตร.ว.', desc:'ที่ดินแปลงสวยถมแล้วพร้อมปลูกบ้านเนื้อที่ 90 ตร.ว อยู่ในหมู่บ้าน เจน&จอย2 หน้าบ้านได้วิวทุ่งนาธรรมชาติ\n\n- หน้ากว้าง 20 เมตร ลึก 18 เมตร\n- เดินทางเข้า-ออกสะดวก เข้าตัวเมืองไม่เกิน 10 นาที \n- ราคาเพียง 490,000 บาท (ราคานี้รวมโอน)', gallery:['img/6/1.webp','img/6/2.webp'] },
      { title:'เจน&จอย 2 (150 ตร.ว.)', img:'img/28.webp', map:'https://maps.app.goo.gl/ayPLCaMWA19ohCgG8',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:750000, price:'750,000', type:'landhouse', area:'150 ตร.ว.', desc:'ที่ดินแปลงคุ้ม ทำเลดีโครงการเจน&จอย2 เนื้อที่ 150 ตร.ว ทำเลเข้าเมืองง่าย บรรยากาศดี ไม่แออัด\n\n- หน้ากว้าง 26 ม. สร้างบ้านได้สบาย\n- ห่างตัวเมืองแค่ 6 กม. ไม่ไกล ไม่เปลี่ยว\n- ห่างจากถนนหลักเพียง 250 ม.\n- น้ำประปา / ไฟฟ้า / ถนนคอนกรีต พร้อมใช้งาน\n- ราคาเพียง 750,000 บาท (รวมโอน)', gallery:['img/25/1.webp','img/25/2.webp','img/25/3.webp'] },
      { title:'ที่ดินบ้านสวนใกล้วัดสันป่าลาน ', img:'img/31.webp', map:'https://maps.app.goo.gl/JhD77mmTQR54EVih8',  loc:'ต.บ่อแฮ้ว อ.เมือง ลำปาง', priceNum:1290000, price:'1,290,000', type:'large-land', area:'1-2-30 ไร่', desc:'ที่ดินบ้านสวน เนื้อที่ 1 ไร่ 3 งาน 16 ตร.ว บรรยากาศร่มรื่น พื้นที่กว้าง พร้อมบ่อน้ำ  \n\n- ตัวบ้านเดิม 1 ห้องนอน/1 ห้องน้ำ/1 ห้องโถง\n- ภายในพื้นที่ปลูก /ต้นสัก/มะม่วง/มะนาว \n- ห่างถนนตัดใหม่ (เลียบคลอง) 1.กม \n- ราคาเพียง 1,290,000 บาท ', gallery:['img/20/1.webp','img/20/2.webp','img/20/3.webp'] },
      { title:'ใกล้วัดร่องกอก', img:'img/24.webp', map:'https://maps.app.goo.gl/m9xHDmh63p9sJwRX7',  loc:'ต.บ่อแฮ้ว อ.เมือง ลำปาง', priceNum:1500000, price:'1,500,000', type:'large-land', area:'1-2-30 ไร่', desc:'ที่ไม่ไกลตัวเมืองทำเลธรรมชาติ เนื้อที่ 1 ไร่ 2 งาน 30 ตร.ว ที่ลายล้อมด้วยทุ่งนาบรรยากาศดีมากธรรมชาติสุดๆ  \n\n- มีรั้วล้อมให้ครบทุกด้าน\n- น้ำประปา/ไฟฟ้า \n- ห่างถนนซุปเปอร์ไฮเวย์ลำปาง-เชียงใหม่ 1.5 กม \n- ห่างถนนตัดใหม่ไม่ถึง 1.กม', gallery:['img/13/1.webp','img/13/4.webp','img/13/2.webp','img/13/3.webp'] },
      { title:'บ้านต้าหน้าค่าย', img:'img/27.webp', map:'https://maps.app.goo.gl/5x2xioxTZsnxuGvg8',  loc:'ต.พิชัย อ.เมือง ลำปาง', priceNum:1750000, price:'1,750,000', type:'landhouse', area:'116 ตร.ว.', desc:'ที่สวยใกล้เมือง เนื้อที่ 116 ตร.ว บ้านต้าหน้าค่าย ซอยราษฎร์บูรณะ13 เงียบสงบเป็นส่วนตัวมาก \n\n- มีรั้วล้อมทั้ง 4 ด้าน \n- น้ำประปา/ไฟฟ้า \n- ห่างจากค่ายสุรศักดิ์มนตรี 2.กม \n- ใกล้ รพ.ลำปาง,รพ.ค่ายสุรศักดิ์มนตรี ', gallery:['img/14/1.webp','img/14/2.webp','img/14/3.webp'] },
      { title:'ที่ดิน 12 แปลงโซนวัดสันป่าลาน', img:'img/37.webp', map:'https://maps.app.goo.gl/EMgcndhCFmBkdd3p8',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:572000, price:'572,000', type:'landhouse', area:'104-126 ตร.ว.', desc:'ที่สวยทำเลดีแบ่งขาย 12 แปลง พิกัดโซนวัดสันป่าลาน ขายเพียง ตร.ว ละ 5,500 บาท \n\n- มีทั้งหมด 12 แปลงตั้งแต่ 104-126 ตร.ว \n- น้ำประปา/ถนนคอนกรีต \n- หน้ากว้าง 15 ม. ลึก 26 ม. (ขึ้นไป) \n- วิวภูเขาล้อมรอบ \n- เข้าออกสะดวกเข้าตัวเมืองไม่ถึง 10 นาที\n\nรีบเข้ามาจับจองกันนะคะ มาก่อนได้เลือกแปลงและทำเลที่โดนใจก่อนใคร', gallery:['img/28/1.webp','img/28/2.webp','img/28/3.webp','img/28/4.webp','img/28/5.webp'] },
      { title:'ที่ดินสวยถมแล้ว พระเจ้าทันใจซอย 8', img:'img/38.webp', map:'https://maps.app.goo.gl/EAUBZNELbXaBrFub6',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:960000, price:'960,000', type:'landhouse', area:'96 ตร.ว.', desc:'ที่ดินสวยถมแล้วพร้อมปลูกสร้างทันที เนื้อที่ 96 ตร.ว พิกัดพระเจ้าทันใจซอย 8  \n\n- ราคาขาย 960,000 บาท \n- น้ำประปา/ไฟฟ้า \n- แปลงหัวมุม   \n- เข้าออกสะดวกเข้าตัวเมืองไม่ถึง 5 นาที', gallery:['img/30/1.webp','img/30/2.webp','img/38.webp','img/30/3.webp'] },
      { title:'บ้านสวยสไตล์โมเดิร์น', img:'img/15.webp', map:'https://maps.app.goo.gl/sN5q7SyGFRhkKfT97', loc:'ต.บ่อแฮ้ว อ.เมือง ลำปาง', priceNum:1450000, price:'1,450,000', type:'house', tag:'บ้านรีโนเวท', area:'60 ตร.ว.', desc:'บ้านรีโนเวทพร้อมเข้าอยู่ เนื้อที่ 79 ตร.ว บ้านดงม่อนกระทิง มีพื้นที่ใช้สอยเหลือเฟือ สามารถต่อเติมได้เยอะ \n\n- 3 ห้องนอน 1 ห้องน้ำ 1 ห้องครัว \n- โถงในบ้าน/โถงหน้าบ้าน  \n- แอร์+เครื่องทำน้ำอุ่น \n- จอดรถยนต์ได้ถึง 4 คัน  ', gallery:['img/8/1.webp','img/8/2.webp','img/8/3.webp','img/8/5.webp','img/8/4.webp'] },
      { title:'บ้านสวยใจกลางเมือง', img:'img/16.webp', map:'https://maps.app.goo.gl/dgC7qFk8yidmzV9u9',  loc:'ต.พระบาท อ.เมือง ลำปาง', priceNum:6500000, price:'6,500,000', type:'house', tag:'บ้านมือสอง', area:'116 ตร.ว.', desc:'บ้าน 2 ชั้น ใจกลางเมืองทำเลดีมาก เนื้อที่ 116 ตร.ว โครงสร้างแข็งแรงวัสดุพรีเมียม ดีไซน์ทันสมัย\n\n- 4 ห้องนอน | 4 ห้องน้ำ  \n- 1 ห้องครัว | 1 ห้องทานข้าว\n- จอดรถยนต์ได้ถึง 5 คัน \n- สวนโกโก้รอบบ้าน บรรยากาศร่มรื่น', gallery:['img/9/1.webp','img/9/2.webp','img/9/8.webp','img/9/4.webp','img/9/5.webp','img/9/6.webp','img/9/7.webp','img/9/3.webp'] },
      { title:'บ้านสวยสไตล์โมเดิร์น (สร้างได้70%)', img:'img/17.webp', map:'https://maps.app.goo.gl/vnAfmHGcHY4JDSMH8',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:1250000, price:'1,250,000', type:'house', tag:'บ้านสร้างใหม่', area:'76 ตร.ว.', desc:'บ้านสวยชั้นเดียวสไตล์โมเดิล สร้างใหม่ได้ 70% กำลังรอเจ้าของคนใหม่ อยู่ในโครงการบ้านอลิน@เจดีย์ซาว \n\n- ห่างจากวัดเจย์ซาวเพียง 250 เมตร \n- 3 ห้องนอน | 2 ห้องน้ำ \n- มีเลขที่บ้านแล้ว \n- หน้าบ้านเป็นทุ่งนา บรรยากาศธรรมชาติสุดๆ', gallery:['img/10/1.webp','img/10/2.webp','img/10/3.webp','img/10/4.webp'] },
      { title:'ตึก 2 คูหาแยกเฮือนสายคำ', img:'img/29.webp', map:'https://maps.app.goo.gl/bmPypberbWtJiXLw7',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:2600000, price:'2,600,000/ห้อง', type:'house', tag:'ตึกคูหา', area:'138 ตร.ว.', desc:'อาคารพาณิชย์ทำเลดี แยกเฮือนสายคำ ขายต่ำกว่าราคาประเมิน มีเงินเหลือหลักแสน ทำกิจการต่อได้เดินทางสะดวก ราคาถูกขนาดนี้ไม่มีอีกแล้ว\n\n- ขายห้องละ 2.69 ล้าน (รวมโอน) \n- พร้อมอยู่ตกแต่งไว้แล้วบางส่วน \n-  สามารถทำกิจการเปิดหน้าร้านได้เลย  \n- ยินดีให้คำปรึกษาเรื่องยื่นขอสินเชื่อฟรี', gallery:['img/17/4.webp','img/17/1.webp','img/17/2.webp','img/17/3.webp'] },
      { title:'ทาวเฮ้าส์ 4 คูหาตรงข้ามศาลากลาง', img:'img/34.webp', map:'https://maps.app.goo.gl/2GUXuF3x7WhMdJeH9',  loc:'ต.พระบาท อ.เมือง ลำปาง', priceNum:560000, price:'560,000/ห้อง', type:'house', tag:'ตึกคูหา', area:'2 ชั้น 4 คูหา', desc:'ทาวเฮ้าส์ (4 คูหา) ราคานี้หาไหนไม่ได้อีกแล้ว พิกัดอยู่ตรงข้ามศาลากลางจังหวัดลำปาง\n\n- ราคาพิเศษสุดๆ/กู้แบงค์ มีเงินเหลือ\n- เดินทางสะดวกไม่ไกลตัวเมือง\n- ภายในอาคารเดินสายไฟไว้ทั้งหมดแล้ว\n- ราคาห้องละ 590,000 (เหมาทั้งหมด 4 ห้องมีราคาพิเศษ)', gallery:['img/15/1.webp','img/15/2.webp','img/15/3.webp','img/15/4.webp'] },
       { title:'บ้านสวยมือ 2 ราคาดี ', img:'img/33.webp', map:'https://maps.app.goo.gl/8Ao2CMjzKoBWvuLX6',  loc:'ต.พระบาท อ.เมือง ลำปาง', priceNum:1350000, price:'1,350,000', type:'house', tag:'บ้านมือสอง', area:'66 ตร.ว.', desc:'บ้านสวยมือ 2 ชั้นเดียว เนื้อที่ 66 ตร.ว อยู่ในชุมชนสันติภาพ 3 ห้องนอน 2 ห้องน้ำ 1 จอดรถได้ 2 คัน \n\n- ราคาเพียง 1,350,000 (ราคานี้รวมโอน)\n\n (ลูกค้าท่านใดสนใจเปิดบ้านเข้าชม นัดล่วงหน้าก่อน 1 วันนะคะ)', gallery:['img/16/1.webp','img/16/2.webp'] },
      { title:'บ้านกลางป่าเหมี้ยง', img:'img/18.webp', map:'https://maps.app.goo.gl/kFRnacb1xn9MsNBm8',  loc:'ต.แจ้ซ้อน อ.เมืองปาน ลำปาง', priceNum:2500000, price:'2,500,000', type:'house', tag:'บ้านมือสอง', area:'240 ตร.ว.', desc:'บ้านพักตากอากาศ 2 ชั้น กลางบ้านป่าเหมี้ยง ลายล้อมไปด้วยธรรมชาติ อากาศเย็นตลอดทั้งปี \n\n- 3 ห้องนอน | 2 ห้องน้ำ \n- 1 ครัวนอก | 1 พื้นที่เตรียมอาหาร \n- จอดรถในร่มได้ 2 คัน  \n- ระบบน้ำพร้อมใช้งาน  ปั๊มน้ำ 1 ตัว  ถังสำรองน้ำ 3 ถัง \n- หลังบ้านติดลำธาร น้ำใสไหลเย็นตลอดปี  \n- ทำโฮมสเตย์/บ้านพักสายธรรมชาติ \n\nที่ดินอยู่ในเขตหมู่บ้านกันออกจากอุทยานแล้ว (ไม่มีโฉนดเสียภาษี อบต.แจ้ซ้อนทุกปี)' , gallery:['img/11/1.webp','img/11/2.webp','img/11/3.webp','img/11/4.webp'] },
      { title:'หลังเซเว่นแจ้ห่ม', img:'img/20.webp', map:'https://maps.app.goo.gl/og4arbmztfZJdhv89',  loc:'ต.วิเชตนคร อ.แจ้ห่ม ลำปาง', priceNum:1800000, price:'1,800,000', type:'house', tag:'บ้านมือสอง', area:'66 ตร.ว.', desc:'บ้าน 2 ชั้นพร้อมเข้าอยู่กลางอำเภอเมืองแจ้ห่ม มองจากชั้น 2 เห็นวิวภูเขาธรรมชาติ \n\n- 3 ห้องนอน | 2 ห้องน้ำ \n- ห่างจากเซเว่นแจ้ห่ม 250 เมตร \n- สถานีตำรวจภูธรแจ้ห่ม 300 เมตร  \n- ตลาดแจ้ห่ม 250 เมตร  \n\nเดินทางเข้า–ออกสะดวก ใกล้แหล่งชุมชนและสถานที่สำคัญใช้ชีวิตได้อย่างสะดวกสบาย', gallery:['img/12/1.webp','img/12/2.webp'] },
      { title:'ตึก 3 คูหาทำเลทอง', img:'img/26.webp', map:'https://maps.app.goo.gl/Gcwzgw5VJeF7RKuJ6',  loc:'ต.สบตุ๋บ อ.เมือง ลำปาง', priceNum:19000000, price:'19,000,000', type:'house', tag:'ตึกคูหา', area:'2 ชั้น 3 คูหา', desc:'ตึก 2 ชั้น 3 คูหา พื้นที่ใช้สอยเหลือเฟือทำเลทองเพื่อธุรกิจ ติดเส้นถนนฉัตรไชย  \n\n- ตึก 2 ชั้น 3 คูหาติดกัน \n- มีดาดฟ้า \n- ติดถนนหลัก คนสัญจรตลอดวัน \n- ใกล้ รร.(อัสสัมชัญ, ประชาวิทย์, มัธยม ฯลฯ) \n- ใกล้สถานีรถไฟ,สถานีขนส่ง \n\nเหมาะสำหรับ Guesthouse / Boutique Hotel,ห้องเช่ารายเดือน/รายวัน, คาเฟ่ (Cafe)Co-working', gallery:['img/18/1.webp','img/18/2.webp','img/18/3.webp'] },
      { title:'ที่นา 21 ไร่', img:'img/21.webp', map:'https://maps.app.goo.gl/3WevNsU2UPp4sMEfA',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:250000, price:'250,000/ไร่', type:'large-land', area:'21 ไร่', desc:'ที่นา 21 ไร่  น้ำดี ดินดี บรรยากาศเยี่ยม พิกัด.บ้านโป่งฟาน ต.ตันธงชัย อ.เมืองลำปาง \n\n- เอกสาร นส.3ก \n- ทำนาได้ 2 ครั้งต่อปี\n- เข้าออกสะดวกมาก\n- ห่างถนนตัดใหม่ (นาป้อ-ห้วยทราย) เพียง 13 ม. \n- ราคาไร่ละ 250,000 บาท' ,gallery:['img/21/1.webp','img/21/2.webp','img/21/3.webp']},
      { title:'ที่นา 14 ไร่หลังวัดเจดีย์ซาว', img:'img/35.webp', map:'https://maps.app.goo.gl/MJsGnN8CaW9wXG37A',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:600000, price:'600,000/ไร่', type:'large-land', area:'1-2-83 ไร่', desc:'ที่นาหลังวัดเจดีย์ซาว (พื้นที่ 13 ไร่) ติดถนนทำเลดีสุดๆธรรมชาติไม่ไกลตัวเมืองน่าอยู่และน่าลงทุน \n\n- ราคาขาย ไร่ละ 600,000 บาท \n- โฉนดใบเดียว \n- เหมาะสำหรับ /ทำโคกหนองนา/บ้านสวน/จัดสรรแบ่งขาย',gallery:['img/19/1.webp','img/19/2.webp','img/19/3.webp']},
      { title:'โซนหนองกระทิง', img:'img/23.webp', map:'https://maps.app.goo.gl/ZinBF58rtuyZz24b8',  loc:'ต.บ่อแฮ้ว อ.เมือง ลำปาง', priceNum:5000000, price:'5,000,000/ไร่', type:'large-land', area:'5-2-30 ไร่', desc:'ที่แปลงใหญ่ในตัวเมืองเนื้อที่ 5 ไร่ 2 งาน 30 ตร.ว พร้อมบ้านหลายหลังและอาคารเดิม \n\n- ขายเแปลงละ 5,000,000 บาท\n- หน้ากว้าง 115 เมตร \n- ทางเข้า ศูนย์เฝ้าฟังลำปางโซนเมือง  \n- ห่างจากสวนสาธารณะ หนองกระทิง 2.กม \n- ทำโครงการ / ทำรีสอร์ท / เก็บลงทุน / โกดังสินค้า  ',gallery:['img/23/1.webp','img/23/2.webp','img/23/4.webp','img/23/3.webp'] },
        { title:'ติดถนนคลองชลประทาน', img:'img/99.webp', map:'https://maps.app.goo.gl/ASYR63RYiQENAPv49',  loc:'ต.ต้นธงชัย อ.เมือง ลำปาง', priceNum:5500000, price:'5,500,000', type:'large-land', area:'2-1-80 ไร่', desc:'ที่ดินสวยวิวสวย ติดคันคลองตรงข้ามโรงเรียนเขลางค์ เนื้อที่ 2 ไร่ 1 งาน 80 ตร.ว \n\n- ที่ดินถมเรียบร้อย \n- ทำสะพานเชื่อมที่ดินเรียบร้อย \n- ราคา 5,500,000 / (5,600 ตร.ว) \n- เหมาะสำหรับ เปิดคาเฟ่/ร้านอาหาร/บ้านพัก', gallery:['img/22/1.webp','img/22/2.webp','img/22/3.webp']},
      { title:'โซนพระบาท', img:'img/30.webp', map:'https://maps.app.goo.gl/Vp2dNTzFRsHKxWxB7',  loc:'ต.พระบาท อ.เมือง ลำปาง', priceNum:7928000, price:'7,928,000', type:'large-land', area:'2-1-91 ไร่', desc:'ที่ดินแปลงใหญ่ ราคาดี เนื่อที่ 2 ไร่ 1 งาน 91 ตร.ว. พิกัด โซนพระบาท ห่างถนนเลียบคลอง 300 ม. ใกล้สนามบินลำปาง\n\n- ราคาเพียง 8,000 บาท/ตร.ว\n- เหมาะสำหรับ/สร้างโกดัง/โฮมออฟฟิศ/โครงการจัดสรร  \n\n ที่ดินแปลงใหญ่ไซส์นี้ ในโซนพระบาทโซนนี้ ราคานี้แทบหาไม่ได้แล้วในตลาดปัจจุบัน' ,gallery:['img/31/1.webp','img/31/2.webp']},
      { title:'บ้านเหล่าบุญเกิด', img:'img/22.webp', map:'https://maps.app.goo.gl/FoZxZmt4vsygzMTB9',  loc:'ต.พระบาท อ.เมือง ลำปาง', priceNum:1800000, price:'1,800,000', type:'large-land', area:'4-2-20 ไร่', desc:'ที่แปลงใหญ่ในชุมชม พิกัด.บ้านเหล่าบุญเกิด เนื้อที่ 4 ไร่ 2 งาน 20 ตร.ว \n\n- ขาย ตร.ว ละ 4900 บาท\n- ห่างจากสนามบินลำปาง 3.3 กม\n- ห่างจากศาลากลางจังหวัดลำปาง 3.5 กม\n- เหมาะสำหรับ ทำโครงการ / ทำรีสอร์ท / เก็บลงทุน',gallery:['img/29/1.webp','img/29/2.webp','img/29/3.webp']},
    
    ];
 
    const HERO_IDX = [1,2,7,9,11,12,13,14,15,16];
    const typeMap = { house:'บ้าน/ตึก', landhouse:'ที่ดินเหมาะปลูกบ้าน', 'large-land':'ที่แปลงใหญ่' };
    const pinSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`;

    const ITEMS_PER_PAGE = 20;
    let currentPage = 1;

    let curFilter='all', curSort='default', heroPage=0, heroTimer=null;
    const HERO_IV=5000;

   function getItemsPerView() { 
      if (window.innerWidth <= 600) return 1;  // มือถือจอเล็ก: 1 รูป
      if (window.innerWidth <= 1024) return 2; // แท็บเล็ต/iPad: 2 รูป
      if (window.innerWidth < 2200) return 3;  // Full HD/โน้ตบุ๊กจอใหญ่: 3 รูป
      return 4;                                // จอ 2K ขึ้นไป: 4 รูป
    }

 function buildHero(){
  const track = document.getElementById('heroTrack');
  track.innerHTML = HERO_IDX.map((di, si) => {
    const d = DATA[di];
    return `<div class="hero-slide" data-di="${di}" onclick="openDetail(${di})">
      <div class="hero-slide-img">
        <img src="${d.img}" alt="${d.title}" 
             loading="${si === 0 ? 'eager' : 'lazy'}" 
             ${si === 0 ? 'fetchpriority="high"' : ''}>
      </div>
      <div class="hero-caption">
        <div class="hero-caption-type">${d.tag || typeMap[d.type]}</div>
        <div class="hero-caption-title-row">
          <span class="hero-caption-title">${d.title}</span>
          <span class="hero-caption-loc">${pinSVG}${d.loc}</span>
        </div>
        <div class="hero-caption-bottom">
          <div class="hero-caption-price">${d.price}<span>บาท</span></div>
          <div class="hero-caption-area">${d.area}</div>
        </div>
      </div>
    </div>`;
  }).join('');
  renderDots(); startTimer();
}

    function renderDots(){
  const steps = getItemsPerView();
  const totalPages = Math.ceil(HERO_IDX.length / steps);
  const dots = document.getElementById('heroDots');
  let html = '';
  for(let i=0; i<totalPages; i++){
    // เติม aria-label="สไลด์ที่ ${i+1}" เข้าไปในปุ่ม
    html += `<button class="hero-dot ${i===heroPage?'active':''}" onclick="heroJump(${i})" aria-label="สไลด์ที่ ${i+1}"></button>`;
  }
  dots.innerHTML = html;
}

    function setHero(page){
      const steps = getItemsPerView();
      const totalPages = Math.ceil(HERO_IDX.length / steps);
      
      // หมุนวนกลับหน้าแรก/หน้าสุดท้าย
      if(page >= totalPages) page = 0;
      if(page < 0) page = totalPages - 1;
      heroPage = page;
      
      // หาตำแหน่ง index จริงๆ ที่จะแสดง
      let targetIdx = heroPage * steps;
      const maxIdx = HERO_IDX.length - steps;
      // ป้องกันพื้นที่สีดำว่างๆ ท้ายสไลด์
      if(targetIdx > maxIdx) targetIdx = maxIdx; 
      
      const offset = targetIdx * (100 / steps);
      document.getElementById('heroTrack').style.transform = `translateX(-${offset}%)`;
      document.querySelectorAll('.hero-dot').forEach((d,j)=>d.classList.toggle('active',j===heroPage));
      resetProg();
    }

    function heroMove(d){ clearTimeout(heroTimer); setHero(heroPage+d); startTimer(); }
    function heroJump(p){ clearTimeout(heroTimer); setHero(p); startTimer(); }

    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      if (window.innerWidth !== lastWidth) { // เช็คว่าความกว้างเปลี่ยนจริงๆ ค่อยคำนวณใหม่
        lastWidth = window.innerWidth;
        renderDots();
        setHero(heroPage); // ให้อยู่หน้าเดิม ไม่เด้งกลับไปหน้าแรก
      }
    });

    function resetProg(){
      const b=document.getElementById('heroProgress');
      if(!b) return;
      b.classList.remove('running');
    }
    function animProg(){
      const b=document.getElementById('heroProgress');
      if(!b) return;
      b.style.setProperty('--hero-progress-duration', HERO_IV + 'ms');
      b.classList.remove('running');
      void b.offsetWidth;
      b.classList.add('running');
    }
    function startTimer(){ animProg(); heroTimer=setTimeout(()=>{ setHero(heroPage+1); startTimer(); },HERO_IV); }

    let htx=null;
    const hc=document.getElementById('heroCarousel');
    hc.addEventListener('touchstart',e=>{htx=e.touches[0].clientX;},{passive:true});
    hc.addEventListener('touchend',e=>{
      if(htx===null)return;
      const dx=e.changedTouches[0].clientX-htx;
      if(Math.abs(dx)>40) heroMove(dx<0?1:-1);
      htx=null;
    },{passive:true});

    /* ---- Modal ---- */
    let galImages=[], galIndex=0, galleryWarmTimer=null, galScrollRaf=null, galIsResetting=false;

    function cancelGalleryScrollSync() {
      if (!galScrollRaf) return;
      cancelAnimationFrame(galScrollRaf);
      galScrollRaf = null;
    }

    function jumpGalleryToStart(track) {
      if (!track) return;
      track.style.scrollBehavior = 'auto';
      if (typeof track.scrollTo === 'function') {
        track.scrollTo({ left: 0, behavior: 'auto' });
      }
      track.scrollLeft = 0;
    }

    function loadGalleryImage(i) {
      if (!galImages.length) return;
      const safeIndex = (i + galImages.length) % galImages.length;
      const img = document.querySelectorAll('#galTrack img')[safeIndex];
      if (!img || img.src || !img.dataset.src) return;
      img.loading = 'eager';
      img.decoding = 'async';
      img.src = img.dataset.src;
      delete img.dataset.src;
    }

    function warmGalleryImages(includePrev = true) {
      loadGalleryImage(galIndex);
      loadGalleryImage(galIndex + 1);
      if (includePrev) loadGalleryImage(galIndex - 1);
    }

    function scrollGalleryTo(index, behavior = 'smooth') {
      const track = document.getElementById('galTrack');
      if (!track || !galImages.length) return;

      galIndex = (index + galImages.length) % galImages.length;
      const left = galIndex * track.clientWidth;
      if (typeof track.scrollTo === 'function') {
        track.scrollTo({ left, behavior });
      } else if (typeof track.scroll === 'function') {
        track.scroll({ left, behavior });
      } else {
        track.scrollLeft = left;
      }
      buildDots();
      warmGalleryImages();
    }

    function syncGalleryFromScroll() {
      if (galIsResetting) return;
      const track = document.getElementById('galTrack');
      if (!track || !galImages.length || !track.clientWidth) return;

      const nextIndex = Math.max(0, Math.min(galImages.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
      if (nextIndex === galIndex) return;

      galIndex = nextIndex;
      buildDots();
      warmGalleryImages();
    }

    function openDetail(idx) {
      const d = DATA[idx];
      galImages = (d.gallery && d.gallery.length > 0) ? d.gallery : [d.img];
      galIndex = 0;

      if (galleryWarmTimer) clearTimeout(galleryWarmTimer);
      cancelGalleryScrollSync();
      galIsResetting = true;

     const trackHTML = galImages.map((src, i) =>
        `<div class="gal-slide">
           <img ${i === 0 ? `src="${src}" fetchpriority="high"` : `data-src="${src}"`} loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" draggable="false" onload="this.classList.add('loaded'); this.parentElement.classList.add('finish-load');">
         </div>`
      ).join('');

      const dotsHTML = galImages.map((_, i) =>
        `<div class="gal-dot ${i === 0 ? 'active' : ''}" onclick="galJump(${i})"></div>`
      ).join('');

      const locHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/>
        <circle cx="12" cy="10" r="2.5"/></svg>${d.loc}`;

      const track  = document.getElementById('galTrack');
      const dots   = document.getElementById('galDots');
      const modal  = document.getElementById('detailModal');
      const mapBtn = document.getElementById('btnMap');
      const body   = document.querySelector('.modal-body');

      track.innerHTML               = trackHTML;
      jumpGalleryToStart(track);
      dots.innerHTML                = dotsHTML;

      document.getElementById('modalTitle').textContent = d.title;
      const tag=document.getElementById('modalTag');
      tag.textContent=d.tag||typeMap[d.type]; tag.className='modal-tag tag-'+d.type;
      document.getElementById('modalPrice').textContent = d.price + ' บาท';
      document.getElementById('modalArea').textContent  = d.area;
      document.getElementById('modalDesc').textContent  = d.desc;
      document.getElementById('modalLoc').innerHTML     = locHTML;

      mapBtn.style.display = d.map    ? 'flex' : 'none';
      
      if (d.map)    mapBtn.href = d.map;
      

      modal.classList.add('open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow            = 'hidden';
      document.body.classList.add('hide-floating');
      galleryWarmTimer = setTimeout(() => warmGalleryImages(false), 350);

      requestAnimationFrame(() => {
        body.scrollTop = 0;
        galIndex = 0;
        jumpGalleryToStart(track);
        buildDots();

        requestAnimationFrame(() => {
          galIndex = 0;
          jumpGalleryToStart(track);
          buildDots();
          track.style.scrollBehavior = '';
          galIsResetting = false;
        });
      });
    }
    function closeDetail() {
      if (galleryWarmTimer) clearTimeout(galleryWarmTimer);
      cancelGalleryScrollSync();
      galIsResetting = false;
      document.getElementById('detailModal').classList.remove('open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('hide-floating');
    }
    function overlayClick(e){ if(e.target===document.getElementById('detailModal')) closeDetail(); }
    function buildDots(){ 
  const dots = document.querySelectorAll('.gal-dot');
  if(dots.length > 0) {
    // ใช้สลับคลาส active เอา เบาเครื่องกว่าเดิม 10 เท่า
    dots.forEach((d, i) => d.classList.toggle('active', i === galIndex)); 
  }
}
    function galMove(dir){ scrollGalleryTo(galIndex + dir); }
    function galJump(i){ scrollGalleryTo(i); }

    /* GRID & PAGINATION */
    const observer=new IntersectionObserver(entries=>{ entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),i*55); observer.unobserve(e.target); } }); },{threshold:0.08});
    
    function applySort(){ curSort=document.getElementById('sortSelect').value; render(null, true); }
    function syncAndSort(el){ document.getElementById('sortSelect').value=el.value; applySort(); }

    function updatePagination(current, total) {
      const container = document.getElementById('pagination');
      if (total <= 1) {
        container.innerHTML = `
          <button class="page-btn" disabled>‹ ก่อนหน้า</button>
          <span class="page-info">หน้า 1 / 1</span>
          <button class="page-btn" disabled>ถัดไป ›</button>
        `;
        return;
      }
      container.innerHTML = `
        <button class="page-btn" ${current === 1 ? 'disabled' : ''} onclick="changePage(${current - 1})">‹ ก่อนหน้า</button>
        <span class="page-info">หน้า ${current} / ${total}</span>
        <button class="page-btn" ${current === total ? 'disabled' : ''} onclick="changePage(${current + 1})">ถัดไป ›</button>
      `;
    }

   function changePage(newPage) {
      currentPage = newPage;
      render(null, false);
      
      // เปลี่ยนคำสั่งให้เลื่อนมาหยุดที่ ID "listings" แทน
      document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
    }

    function render(f, resetPage = true){
      if(f) curFilter=f;
      if(resetPage) currentPage = 1;

      document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.f===curFilter));
      
      let items=DATA.map((d,i)=>({...d,_i:i}));
      if(curFilter!=='all') items=items.filter(d=>d.type===curFilter);
      
      document.getElementById('secLabel').textContent=`ทั้งหมด ${items.length} รายการ`;
      
      if(curSort==='price-asc') items.sort((a,b)=>a.priceNum-b.priceNum);
      if(curSort==='price-desc') items.sort((a,b)=>b.priceNum-a.priceNum);

      const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE) || 1;
      if(currentPage > totalPages) currentPage = totalPages;

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      const grid=document.getElementById('grid');
      if(!paginatedItems.length){ 
        grid.innerHTML='<div class="empty">ไม่พบรายการในหมวดนี้</div>'; 
        updatePagination(0, 0);
        return; 
      }

      grid.innerHTML=paginatedItems.map(d=>`
        <div class="card" onclick="openDetail(${d._i})">
          <div class="card-img">
            <img src="${d.img}" alt="${d.title}" loading="lazy"/>
            <div class="card-tag tag-${d.type}">${d.tag||typeMap[d.type]}</div>
          </div>
          <div class="card-body">
            <div class="card-loc">${pinSVG}${d.loc}</div>
            <div class="card-name">${d.title}</div>
            <div class="card-desc">${d.desc}</div>
            <div class="card-foot">
              <div class="card-price">${d.price}<small> บาท</small></div>
              <div class="card-area">${d.area}</div>
            </div>
            <button class="card-btn" onclick="event.stopPropagation();openDetail(${d._i})">ดูรายละเอียด</button>
          </div>
        </div>`).join('');
      
      requestAnimationFrame(()=>{ grid.querySelectorAll('.card').forEach(c=>observer.observe(c)); });
      updatePagination(currentPage, totalPages);
    }

    window.addEventListener('load',()=>{
      const isMobile=window.matchMedia('(max-width:768px)').matches;
      if(isMobile){ DATA.slice(0,6).forEach(d=>{new Image().src=d.img;}); setTimeout(()=>DATA.slice(6).forEach(d=>{new Image().src=d.img;}),3000); }
      else DATA.forEach(d=>{new Image().src=d.img;});
    });
    document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>render(c.dataset.f, true)));
    buildHero(); render('all', true);
    document.getElementById('galTrack')?.addEventListener('scroll', () => {
      if (galIsResetting) return;
      if (galScrollRaf) return;
      galScrollRaf = requestAnimationFrame(() => {
        galScrollRaf = null;
        syncGalleryFromScroll();
      });
    }, { passive: true });
