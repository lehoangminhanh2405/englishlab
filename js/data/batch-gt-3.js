// Đợt 3 chủ đề giao tiếp (B1): thiên nhiên & động vật, lễ hội & phong tục, tìm việc & phỏng vấn, kế hoạch & ước mơ.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'thien-nhien-dong-vat', title: 'Thiên nhiên & động vật', icon: '🌳', level: 'B1',
      desc: 'Cảnh quan, động vật, thực vật, thời gian ở ngoài trời và bảo vệ thiên nhiên.',
      words: [
        ['nature', 'thiên nhiên', 'I love spending time in nature.', 'Tôi thích dành thời gian bên thiên nhiên.'],
        ['countryside', 'miền quê', 'We spent the weekend in the countryside.', 'Chúng tôi dành cuối tuần ở miền quê.'],
        ['forest', 'khu rừng', 'There is a big forest near our village.', 'Có một khu rừng lớn gần làng chúng tôi.'],
        ['jungle', 'rừng rậm', 'Many rare animals live in the jungle.', 'Nhiều loài thú hiếm sống trong rừng rậm.'],
        ['mountain', 'ngọn núi', 'We climbed the mountain in four hours.', 'Chúng tôi leo núi mất bốn giờ.'],
        ['valley', 'thung lũng', 'A small river runs through the valley.', 'Một con sông nhỏ chảy qua thung lũng.'],
        ['hill', 'ngọn đồi', 'The house stands on a green hill.', 'Ngôi nhà nằm trên một ngọn đồi xanh.'],
        ['river', 'dòng sông', 'We went fishing in the river.', 'Chúng tôi đi câu cá trên sông.'],
        ['lake', 'hồ nước', 'The lake is calm in the morning.', 'Mặt hồ yên ả vào buổi sáng.'],
        ['waterfall', 'thác nước', 'The waterfall is more than fifty meters high.', 'Thác nước cao hơn năm mươi mét.'],
        ['island', 'hòn đảo', 'We took a boat to a small island.', 'Chúng tôi đi thuyền đến một hòn đảo nhỏ.'],
        ['desert', 'sa mạc', 'It is very hot in the desert.', 'Sa mạc rất nóng.'],
        ['coast', 'bờ biển', 'They live on the south coast.', 'Họ sống ở bờ biển phía nam.'],
        ['cave', 'hang động', 'We visited a huge cave.', 'Chúng tôi thăm một hang động khổng lồ.'],
        ['landscape', 'cảnh quan', 'The landscape here is beautiful.', 'Cảnh quan ở đây rất đẹp.'],
        ['scenery', 'phong cảnh', 'The scenery on the way was amazing.', 'Phong cảnh trên đường đi thật tuyệt.'],
        ['sunrise', 'bình minh', 'We got up early to watch the sunrise.', 'Chúng tôi dậy sớm để ngắm bình minh.'],
        ['sunset', 'hoàng hôn', 'The sunset over the sea was beautiful.', 'Hoàng hôn trên biển rất đẹp.'],
        ['wildlife', 'động vật hoang dã', 'The park is full of wildlife.', 'Công viên có đầy động vật hoang dã.'],
        ['wild', 'hoang dã', 'Wild elephants live in this park.', 'Voi hoang dã sống trong công viên này.'],
        ['pet', 'thú cưng', 'Do you have a pet at home?', 'Bạn có thú cưng ở nhà không?'],
        ['farm animal', 'vật nuôi trong trại', 'Cows and pigs are farm animals.', 'Bò và lợn là vật nuôi trong trại.'],
        ['bird', 'con chim', 'A bird is singing outside my window.', 'Một con chim đang hót ngoài cửa sổ.'],
        ['butterfly', 'con bướm', 'A colorful butterfly sat on the flower.', 'Một con bướm sặc sỡ đậu trên bông hoa.'],
        ['bee', 'con ong', 'Bees make honey.', 'Ong làm ra mật.'],
        ['insect', 'côn trùng', 'Some insects can be dangerous.', 'Một số côn trùng có thể nguy hiểm.'],
        ['snake', 'con rắn', 'Be careful. There may be snakes here.', 'Hãy cẩn thận. Có thể có rắn ở đây.'],
        ['monkey', 'con khỉ', 'The monkeys stole our bananas.', 'Bầy khỉ đã lấy trộm chuối của chúng tôi.'],
        ['elephant', 'con voi', 'An elephant can weigh five tons.', 'Một con voi có thể nặng năm tấn.'],
        ['tiger', 'con hổ', 'Tigers are in danger of extinction.', 'Hổ đang có nguy cơ tuyệt chủng.'],
        ['dolphin', 'cá heo', 'The dolphins jumped next to our boat.', 'Đàn cá heo nhảy bên cạnh thuyền chúng tôi.'],
        ['whale', 'cá voi', 'We saw a whale from the ship.', 'Chúng tôi nhìn thấy một con cá voi từ tàu.'],
        ['turtle', 'con rùa', 'Sea turtles lay their eggs on the beach.', 'Rùa biển đẻ trứng trên bãi biển.'],
        ['tree', 'cái cây', 'We planted a tree in the garden.', 'Chúng tôi trồng một cái cây trong vườn.'],
        ['flower', 'bông hoa', 'These flowers smell wonderful.', 'Những bông hoa này thơm tuyệt.'],
        ['grass', 'cỏ', 'Let us sit on the grass.', 'Chúng ta ngồi trên bãi cỏ đi.'],
        ['leaf', 'chiếc lá', 'The leaves turn red in autumn.', 'Lá chuyển sang màu đỏ vào mùa thu.'],
        ['branch', 'cành cây', 'A bird sat on the branch.', 'Một con chim đậu trên cành cây.'],
        ['bush', 'bụi cây', 'The rabbit ran into the bush.', 'Con thỏ chạy vào bụi cây.'],
        ['path', 'lối mòn', 'We followed a narrow path through the forest.', 'Chúng tôi đi theo con đường mòn hẹp xuyên rừng.'],
        ['trail', 'đường mòn đi bộ', 'This trail is popular with hikers.', 'Đường mòn này được người đi bộ đường dài ưa chuộng.'],
        ['hiking', 'đi bộ đường dài', 'We go hiking every weekend.', 'Chúng tôi đi bộ đường dài mỗi cuối tuần.'],
        ['camp', 'cắm trại', 'We camp by the lake in summer.', 'Chúng tôi cắm trại bên hồ vào mùa hè.'],
        ['tent', 'cái lều', 'We put up our tent near the river.', 'Chúng tôi dựng lều gần con sông.'],
        ['campfire', 'lửa trại', 'We sang songs around the campfire.', 'Chúng tôi hát quanh đống lửa trại.'],
        ['national park', 'vườn quốc gia', 'This national park is a protected area.', 'Vườn quốc gia này là khu vực được bảo vệ.'],
        ['reserve', 'khu bảo tồn', 'The nature reserve protects rare birds.', 'Khu bảo tồn thiên nhiên bảo vệ các loài chim quý.'],
        ['protect', 'bảo vệ', 'We must protect the environment.', 'Chúng ta phải bảo vệ môi trường.'],
        ['endangered', 'có nguy cơ tuyệt chủng', 'The panda is an endangered animal.', 'Gấu trúc là loài vật có nguy cơ tuyệt chủng.'],
        ['extinct', 'tuyệt chủng', 'Dinosaurs became extinct long ago.', 'Khủng long đã tuyệt chủng từ lâu.'],
        ['litter', 'rác vứt bừa bãi', 'Please do not drop litter in the park.', 'Làm ơn đừng vứt rác bừa bãi trong công viên.'],
        ['fresh air', 'không khí trong lành', 'I need some fresh air.', 'Tôi cần chút không khí trong lành.'],
        ['peaceful', 'yên bình', 'The village is quiet and peaceful.', 'Ngôi làng yên tĩnh và bình yên.'],
      ],
      patterns: [
        ['We went hiking in the mountains and camped by a lake.', 'Chúng tôi đi bộ đường dài trên núi và cắm trại bên một hồ nước.'],
        ['This national park is home to many rare and endangered animals.', 'Vườn quốc gia này là nơi sinh sống của nhiều loài động vật quý hiếm và có nguy cơ tuyệt chủng.'],
        ['The view from the top of the hill was breathtaking.', 'Khung cảnh từ đỉnh đồi thật ngoạn mục.'],
        ['Please do not feed the animals or leave litter in the forest.', 'Vui lòng không cho động vật ăn hay xả rác trong rừng.'],
        ['I love the peace and fresh air of the countryside.', 'Tôi yêu sự yên bình và không khí trong lành của miền quê.'],
      ],
      dialogue: [
        ['A', 'Where did you go last weekend?', 'Cuối tuần trước bạn đã đi đâu?'],
        ['B', 'We went hiking in a national park in the mountains.', 'Chúng tôi đi bộ đường dài ở một vườn quốc gia trên núi.'],
        ['A', 'Did you see any wild animals?', 'Bạn có thấy động vật hoang dã nào không?'],
        ['B', 'Yes, we saw some monkeys and a lot of colorful birds.', 'Có, chúng tôi thấy vài con khỉ và nhiều loài chim sặc sỡ.'],
        ['A', 'That sounds wonderful. Where did you sleep?', 'Nghe tuyệt quá. Bạn ngủ ở đâu?'],
        ['B', 'In a tent next to a small lake. The sunrise was amazing.', 'Trong lều cạnh một hồ nhỏ. Bình minh thật tuyệt.'],
      ],
    },
    {
      id: 'le-hoi-van-hoa', title: 'Lễ hội & phong tục', icon: '🎆', level: 'B1',
      desc: 'Ngày lễ, lễ hội truyền thống, phong tục, quà tặng và cách chúc mừng.',
      words: [
        ['festival', 'lễ hội', 'The lantern festival is very colorful.', 'Lễ hội đèn lồng rất sặc sỡ.'],
        ['celebrate', 'ăn mừng, kỷ niệm', 'We celebrate Tet with our families.', 'Chúng tôi đón Tết cùng gia đình.'],
        ['celebration', 'lễ kỷ niệm', 'The celebration lasted all night.', 'Lễ kỷ niệm kéo dài suốt đêm.'],
        ['holiday', 'ngày lễ', 'New Year\'s Day is a public holiday.', 'Ngày đầu năm là ngày lễ chung.'],
        ['tradition', 'truyền thống', 'It is a tradition to give lucky money.', 'Mừng tuổi lì xì là một truyền thống.'],
        ['custom', 'phong tục', 'Every country has its own customs.', 'Mỗi nước đều có phong tục riêng.'],
        ['ceremony', 'nghi lễ', 'The wedding ceremony was beautiful.', 'Lễ cưới rất đẹp.'],
        ['ritual', 'nghi thức', 'This ritual has existed for centuries.', 'Nghi thức này đã tồn tại hàng thế kỷ.'],
        ['lunar calendar', 'âm lịch', 'Tet follows the lunar calendar.', 'Tết theo âm lịch.'],
        ['New Year', 'năm mới', 'Happy New Year!', 'Chúc mừng năm mới!'],
        ['Mid-Autumn Festival', 'Tết Trung thu', 'Children carry lanterns at the Mid-Autumn Festival.', 'Trẻ em rước đèn trong Tết Trung thu.'],
        ['Christmas', 'lễ Giáng sinh', 'We decorate a tree at Christmas.', 'Chúng tôi trang trí cây thông vào lễ Giáng sinh.'],
        ['Easter', 'lễ Phục sinh', 'Children look for eggs at Easter.', 'Trẻ em đi tìm trứng trong lễ Phục sinh.'],
        ['fireworks', 'pháo hoa', 'We watched the fireworks at midnight.', 'Chúng tôi xem pháo hoa lúc nửa đêm.'],
        ['parade', 'cuộc diễu hành', 'The parade passes through the main street.', 'Cuộc diễu hành đi qua phố chính.'],
        ['costume', 'trang phục hóa trang', 'She wore a traditional costume.', 'Cô ấy mặc trang phục truyền thống.'],
        ['decoration', 'đồ trang trí', 'The decorations were red and gold.', 'Đồ trang trí có màu đỏ và vàng.'],
        ['lantern', 'đèn lồng', 'The lanterns lit up the street.', 'Những chiếc đèn lồng thắp sáng con phố.'],
        ['feast', 'bữa tiệc lớn', 'The family prepared a big feast.', 'Gia đình chuẩn bị một bữa tiệc lớn.'],
        ['traditional food', 'món ăn truyền thống', 'Sticky rice cake is a traditional food.', 'Bánh chưng là món ăn truyền thống.'],
        ['gift', 'món quà', 'She gave me a lovely gift.', 'Cô ấy tặng tôi một món quà đáng yêu.'],
        ['present', 'quà tặng', 'What present did you get for your birthday?', 'Bạn nhận được quà gì vào sinh nhật?'],
        ['wrap', 'gói (quà)', 'Could you wrap this gift, please?', 'Bạn gói giúp món quà này được không?'],
        ['greeting card', 'thiệp chúc mừng', 'I sent her a greeting card.', 'Tôi gửi cho cô ấy một tấm thiệp chúc mừng.'],
        ['wish', 'lời chúc; chúc', 'I wish you a happy new year.', 'Tôi chúc bạn một năm mới hạnh phúc.'],
        ['congratulations', 'chúc mừng', 'Congratulations on your wedding!', 'Chúc mừng đám cưới của bạn!'],
        ['toast', 'nâng ly chúc mừng', 'Let us make a toast to the bride and groom.', 'Chúng ta cùng nâng ly chúc cô dâu chú rể.'],
        ['invite', 'mời', 'They invited us to their wedding.', 'Họ mời chúng tôi đến đám cưới.'],
        ['invitation', 'lời mời, thiệp mời', 'I received an invitation to the party.', 'Tôi nhận được thiệp mời đến bữa tiệc.'],
        ['guest', 'khách mời', 'About two hundred guests came.', 'Có khoảng hai trăm khách đến dự.'],
        ['host', 'chủ nhà, người tổ chức', 'The host welcomed everyone at the door.', 'Chủ nhà chào đón mọi người ở cửa.'],
        ['wedding', 'đám cưới', 'Their wedding will be in June.', 'Đám cưới của họ sẽ diễn ra vào tháng Sáu.'],
        ['bride', 'cô dâu', 'The bride looked beautiful.', 'Cô dâu trông rất đẹp.'],
        ['groom', 'chú rể', 'The groom was nervous.', 'Chú rể rất hồi hộp.'],
        ['anniversary', 'ngày kỷ niệm', 'They celebrated their silver anniversary.', 'Họ kỷ niệm đám cưới bạc.'],
        ['birthday', 'sinh nhật', 'We held a surprise party for her birthday.', 'Chúng tôi tổ chức tiệc bất ngờ cho sinh nhật cô ấy.'],
        ['ancestor', 'tổ tiên', 'We pay respect to our ancestors.', 'Chúng tôi tỏ lòng kính trọng với tổ tiên.'],
        ['altar', 'bàn thờ', 'There is an altar in our living room.', 'Có một bàn thờ trong phòng khách nhà chúng tôi.'],
        ['incense', 'hương, nhang', 'We burn incense on the first day of the month.', 'Chúng tôi thắp hương vào ngày mùng một.'],
        ['temple', 'ngôi đền, chùa', 'Many people visit the temple at New Year.', 'Nhiều người đến chùa dịp đầu năm.'],
        ['pray', 'cầu nguyện', 'People pray for good luck.', 'Mọi người cầu may mắn.'],
        ['lucky', 'may mắn', 'Red is a lucky color.', 'Màu đỏ là màu may mắn.'],
        ['luck', 'vận may', 'Good luck with your exam!', 'Chúc bạn thi tốt!'],
        ['superstition', 'sự mê tín', 'It is a superstition that broken mirrors bring bad luck.', 'Gương vỡ mang lại điều xui là một sự mê tín.'],
        ['reunion', 'sum họp', 'Tet is a time for family reunions.', 'Tết là dịp sum họp gia đình.'],
        ['pass down', 'truyền lại', 'The recipe has been passed down for generations.', 'Công thức đã được truyền lại qua nhiều thế hệ.'],
        ['cultural', 'thuộc văn hóa', 'The festival is a cultural event.', 'Lễ hội là một sự kiện văn hóa.'],
        ['religious', 'thuộc tôn giáo', 'It is an important religious holiday.', 'Đó là một ngày lễ tôn giáo quan trọng.'],
        ['public holiday', 'ngày nghỉ lễ', 'Tomorrow is a public holiday, so the banks are closed.', 'Ngày mai là ngày nghỉ lễ nên ngân hàng đóng cửa.'],
        ['take part in', 'tham gia vào', 'Thousands of people take part in the festival.', 'Hàng nghìn người tham gia lễ hội.'],
        ['spectator', 'khán giả', 'Spectators lined the street.', 'Khán giả đứng hai bên đường.'],
      ],
      patterns: [
        ['In my country, families gather together for the New Year.', 'Ở nước tôi, các gia đình sum họp vào dịp năm mới.'],
        ['It is a tradition to give children lucky money at Tet.', 'Việc lì xì cho trẻ em vào dịp Tết là một truyền thống.'],
        ['The streets were decorated with colorful lanterns and flags.', 'Đường phố được trang trí bằng đèn lồng và cờ nhiều màu.'],
        ['Thank you for inviting us to your wedding.', 'Cảm ơn bạn đã mời chúng tôi đến đám cưới.'],
        ['I wish you and your family good health and happiness.', 'Tôi chúc bạn và gia đình sức khỏe và hạnh phúc.'],
      ],
      dialogue: [
        ['A', 'How do you celebrate the Mid-Autumn Festival in your country?', 'Ở nước bạn, người ta đón Tết Trung thu thế nào?'],
        ['B', 'Children carry lanterns, and families eat mooncakes together.', 'Trẻ em rước đèn và các gia đình cùng ăn bánh trung thu.'],
        ['A', 'That sounds lovely. Is it a public holiday?', 'Nghe thật đáng yêu. Đó có phải ngày nghỉ lễ không?'],
        ['B', 'No, but many families gather in the evening.', 'Không, nhưng nhiều gia đình sum họp vào buổi tối.'],
        ['A', 'I would love to see it one day.', 'Tôi rất muốn được xem một ngày nào đó.'],
        ['B', 'You are welcome to join us next year.', 'Mời bạn đến chung vui với chúng tôi vào năm sau.'],
      ],
    },
    {
      id: 'tim-viec-phong-van', title: 'Tìm việc & phỏng vấn', icon: '📝', level: 'B1',
      desc: 'Tìm việc làm, viết CV, trả lời phỏng vấn, thương lượng lương và nhận việc.',
      words: [
        ['vacancy', 'vị trí tuyển dụng', 'There is a vacancy in the sales team.', 'Có một vị trí trống ở nhóm kinh doanh.'],
        ['job advertisement', 'tin tuyển dụng', 'I saw your job advertisement online.', 'Tôi thấy tin tuyển dụng của bạn trên mạng.'],
        ['position', 'vị trí công việc', 'I am applying for the position of accountant.', 'Tôi ứng tuyển vị trí kế toán.'],
        ['apply', 'ứng tuyển', 'I would like to apply for this job.', 'Tôi muốn ứng tuyển công việc này.'],
        ['applicant', 'ứng viên', 'There were fifty applicants for the job.', 'Có năm mươi ứng viên cho công việc này.'],
        ['candidate', 'ứng cử viên', 'The best candidate will get the job.', 'Ứng viên tốt nhất sẽ nhận được việc.'],
        ['application form', 'đơn xin việc', 'Please fill in the application form.', 'Vui lòng điền đơn xin việc.'],
        ['resume', 'sơ yếu lý lịch', 'Send us your resume and cover letter.', 'Hãy gửi cho chúng tôi sơ yếu lý lịch và thư xin việc.'],
        ['cover letter', 'thư xin việc', 'The cover letter should be short.', 'Thư xin việc nên ngắn gọn.'],
        ['reference', 'người giới thiệu', 'Can you give me two references?', 'Bạn cho tôi hai người giới thiệu được không?'],
        ['qualification', 'bằng cấp, trình độ', 'She has excellent qualifications.', 'Cô ấy có trình độ xuất sắc.'],
        ['degree', 'bằng đại học', 'He has a degree in engineering.', 'Anh ấy có bằng kỹ sư.'],
        ['experience', 'kinh nghiệm', 'Do you have any experience in this field?', 'Bạn có kinh nghiệm nào trong lĩnh vực này không?'],
        ['skill', 'kỹ năng', 'Good communication is an essential skill.', 'Giao tiếp tốt là một kỹ năng thiết yếu.'],
        ['strength', 'điểm mạnh', 'What is your greatest strength?', 'Điểm mạnh lớn nhất của bạn là gì?'],
        ['weakness', 'điểm yếu', 'My weakness is that I work too much.', 'Điểm yếu của tôi là tôi làm việc quá nhiều.'],
        ['achievement', 'thành tích', 'Tell me about your biggest achievement.', 'Hãy kể cho tôi nghe về thành tích lớn nhất của bạn.'],
        ['responsibility', 'trách nhiệm', 'My main responsibility was customer service.', 'Trách nhiệm chính của tôi là chăm sóc khách hàng.'],
        ['interview', 'phỏng vấn', 'I have an interview on Monday.', 'Tôi có buổi phỏng vấn vào thứ Hai.'],
        ['interviewer', 'người phỏng vấn', 'The interviewer asked me about my goals.', 'Người phỏng vấn hỏi tôi về mục tiêu.'],
        ['shortlist', 'danh sách rút gọn', 'You are on the shortlist for the second round.', 'Bạn nằm trong danh sách rút gọn cho vòng hai.'],
        ['first impression', 'ấn tượng đầu tiên', 'First impressions are important.', 'Ấn tượng đầu tiên rất quan trọng.'],
        ['dress code', 'quy định trang phục', 'What is the dress code at the company?', 'Quy định trang phục ở công ty là gì?'],
        ['punctual', 'đúng giờ', 'Always be punctual for an interview.', 'Luôn đúng giờ khi đi phỏng vấn.'],
        ['prepare', 'chuẩn bị', 'I prepared answers to common questions.', 'Tôi đã chuẩn bị câu trả lời cho các câu hỏi thường gặp.'],
        ['research', 'tìm hiểu', 'Research the company before the interview.', 'Hãy tìm hiểu về công ty trước buổi phỏng vấn.'],
        ['why', 'tại sao', 'Why do you want to work here?', 'Tại sao bạn muốn làm việc ở đây?'],
        ['motivation', 'động lực', 'What is your motivation for this job?', 'Động lực của bạn cho công việc này là gì?'],
        ['team player', 'người làm việc nhóm tốt', 'I am a good team player.', 'Tôi là người làm việc nhóm tốt.'],
        ['deal with', 'giải quyết', 'How do you deal with pressure?', 'Bạn xử lý áp lực như thế nào?'],
        ['salary', 'mức lương', 'What salary do you expect?', 'Bạn mong muốn mức lương nào?'],
        ['benefits', 'phúc lợi', 'The benefits include health insurance.', 'Phúc lợi gồm bảo hiểm y tế.'],
        ['negotiate', 'thương lượng', 'You can negotiate your salary.', 'Bạn có thể thương lượng mức lương.'],
        ['offer', 'lời mời nhận việc', 'I received a job offer yesterday.', 'Hôm qua tôi nhận được lời mời làm việc.'],
        ['accept', 'chấp nhận', 'I am happy to accept the offer.', 'Tôi vui lòng nhận lời mời này.'],
        ['decline', 'từ chối', 'I had to decline the offer politely.', 'Tôi phải từ chối lời mời một cách lịch sự.'],
        ['contract', 'hợp đồng', 'Please read the contract carefully.', 'Vui lòng đọc kỹ hợp đồng.'],
        ['probation', 'thời gian thử việc', 'The probation period is two months.', 'Thời gian thử việc là hai tháng.'],
        ['permanent', 'chính thức, lâu dài', 'It is a permanent position.', 'Đây là vị trí chính thức.'],
        ['temporary', 'tạm thời', 'It is only a temporary job.', 'Đây chỉ là công việc tạm thời.'],
        ['full-time', 'toàn thời gian', 'I am looking for a full-time job.', 'Tôi đang tìm việc toàn thời gian.'],
        ['part-time', 'bán thời gian', 'She works part-time at a cafe.', 'Cô ấy làm bán thời gian ở một quán cà phê.'],
        ['freelance', 'làm tự do', 'He works as a freelance designer.', 'Anh ấy làm thiết kế tự do.'],
        ['internship', 'kỳ thực tập', 'I did an internship at a bank.', 'Tôi thực tập ở một ngân hàng.'],
        ['career', 'sự nghiệp', 'I want to build a career in marketing.', 'Tôi muốn xây dựng sự nghiệp trong ngành tiếp thị.'],
        ['promotion', 'sự thăng chức', 'She got a promotion after two years.', 'Cô ấy được thăng chức sau hai năm.'],
        ['resign', 'xin nghỉ việc', 'He decided to resign from his job.', 'Anh ấy quyết định xin nghỉ việc.'],
        ['notice', 'thông báo nghỉ việc', 'You must give a month\'s notice.', 'Bạn phải báo trước một tháng.'],
        ['unemployed', 'thất nghiệp', 'He has been unemployed for six months.', 'Anh ấy đã thất nghiệp sáu tháng.'],
        ['recruit', 'tuyển dụng', 'The company plans to recruit ten new staff.', 'Công ty dự định tuyển mười nhân viên mới.'],
        ['hire', 'thuê, tuyển', 'We decided to hire her.', 'Chúng tôi quyết định tuyển cô ấy.'],
        ['good fit', 'phù hợp', 'I think you are a good fit for our team.', 'Tôi nghĩ bạn rất phù hợp với nhóm chúng tôi.'],
      ],
      patterns: [
        ['I am writing to apply for the position advertised on your website.', 'Tôi viết thư này để ứng tuyển vị trí được đăng trên trang web của quý công ty.'],
        ['Could you tell me a little about yourself and your experience?', 'Bạn có thể kể một chút về bản thân và kinh nghiệm của mình không?'],
        ['What do you consider to be your greatest strength?', 'Bạn cho rằng điểm mạnh lớn nhất của mình là gì?'],
        ['I am a quick learner and I work well in a team.', 'Tôi học nhanh và làm việc nhóm tốt.'],
        ['Thank you for the offer. I would like to accept the position.', 'Cảm ơn lời mời. Tôi muốn nhận vị trí này.'],
      ],
      dialogue: [
        ['Interviewer', 'Thank you for coming. Please tell me a little about yourself.', 'Cảm ơn bạn đã đến. Hãy kể một chút về bản thân.'],
        ['Candidate', 'I graduated in business last year, and I have done an internship at a bank.', 'Tôi tốt nghiệp ngành kinh doanh năm ngoái và đã thực tập ở một ngân hàng.'],
        ['Interviewer', 'Why do you want to work for our company?', 'Tại sao bạn muốn làm việc cho công ty chúng tôi?'],
        ['Candidate', 'I admire your products, and I think I can learn a lot here.', 'Tôi ngưỡng mộ sản phẩm của công ty và nghĩ rằng mình có thể học được nhiều.'],
        ['Interviewer', 'What are your strengths and weaknesses?', 'Điểm mạnh và điểm yếu của bạn là gì?'],
        ['Candidate', 'I am organized and reliable, but sometimes I worry too much about details.', 'Tôi có tổ chức và đáng tin cậy, nhưng đôi khi tôi lo quá nhiều về chi tiết.'],
      ],
    },
    {
      id: 'ke-hoach-uoc-mo', title: 'Kế hoạch, mục tiêu & ước mơ', icon: '🎯', level: 'B1',
      desc: 'Nói về dự định tương lai, mục tiêu, ước mơ, quyết định và cách vượt khó.',
      words: [
        ['plan', 'kế hoạch', 'What are your plans for the summer?', 'Kế hoạch mùa hè của bạn là gì?'],
        ['intend', 'dự định', 'I intend to study abroad next year.', 'Tôi dự định đi du học vào năm sau.'],
        ['hope', 'hy vọng', 'I hope to find a better job.', 'Tôi hy vọng tìm được việc tốt hơn.'],
        ['dream', 'ước mơ', 'My dream is to become a doctor.', 'Ước mơ của tôi là trở thành bác sĩ.'],
        ['ambition', 'hoài bão', 'She has a strong ambition to succeed.', 'Cô ấy có hoài bão thành công mạnh mẽ.'],
        ['goal', 'mục tiêu', 'My goal is to learn English well.', 'Mục tiêu của tôi là học tốt tiếng Anh.'],
        ['aim', 'mục đích, nhắm tới', 'Our aim is to reduce costs.', 'Mục đích của chúng tôi là giảm chi phí.'],
        ['target', 'chỉ tiêu', 'We set a target of ten new customers.', 'Chúng tôi đặt chỉ tiêu mười khách hàng mới.'],
        ['objective', 'mục tiêu cụ thể', 'The main objective is to improve quality.', 'Mục tiêu chính là cải thiện chất lượng.'],
        ['priority', 'ưu tiên', 'My priority is my family.', 'Ưu tiên của tôi là gia đình.'],
        ['decision', 'quyết định', 'It was a difficult decision.', 'Đó là một quyết định khó khăn.'],
        ['decide', 'quyết định', 'I decided to move to Da Nang.', 'Tôi quyết định chuyển đến Đà Nẵng.'],
        ['choice', 'sự lựa chọn', 'We had no other choice.', 'Chúng tôi không còn lựa chọn nào khác.'],
        ['option', 'phương án', 'We have two options.', 'Chúng tôi có hai phương án.'],
        ['opportunity', 'cơ hội', 'This is a great opportunity for you.', 'Đây là cơ hội tuyệt vời cho bạn.'],
        ['chance', 'cơ hội, khả năng', 'I do not want to miss this chance.', 'Tôi không muốn bỏ lỡ cơ hội này.'],
        ['possibility', 'khả năng', 'There is a possibility of rain.', 'Có khả năng trời mưa.'],
        ['probably', 'có lẽ', 'I will probably stay at home tonight.', 'Có lẽ tối nay tôi sẽ ở nhà.'],
        ['definitely', 'chắc chắn', 'I will definitely call you.', 'Tôi chắc chắn sẽ gọi cho bạn.'],
        ['maybe', 'có thể', 'Maybe we can meet next week.', 'Có thể tuần sau chúng ta gặp nhau.'],
        ['look forward to', 'mong chờ', 'I look forward to meeting you.', 'Tôi mong được gặp bạn.'],
        ['be going to', 'sắp, định', 'I am going to start a new course.', 'Tôi sắp bắt đầu một khóa học mới.'],
        ['in the future', 'trong tương lai', 'What do you want to do in the future?', 'Trong tương lai bạn muốn làm gì?'],
        ['short-term', 'ngắn hạn', 'My short-term goal is to pass the exam.', 'Mục tiêu ngắn hạn của tôi là đậu kỳ thi.'],
        ['long-term', 'dài hạn', 'Saving money is a long-term plan.', 'Tiết kiệm tiền là kế hoạch dài hạn.'],
        ['deadline', 'hạn chót', 'We need to meet the deadline.', 'Chúng ta cần kịp hạn chót.'],
        ['schedule', 'lịch trình', 'I made a schedule for my studies.', 'Tôi lập lịch trình học tập.'],
        ['step', 'bước', 'The first step is to make a plan.', 'Bước đầu tiên là lập kế hoạch.'],
        ['progress', 'tiến bộ', 'You are making good progress.', 'Bạn đang tiến bộ tốt.'],
        ['achieve', 'đạt được', 'She worked hard to achieve her goals.', 'Cô ấy làm việc chăm chỉ để đạt mục tiêu.'],
        ['succeed', 'thành công', 'I am sure you will succeed.', 'Tôi chắc bạn sẽ thành công.'],
        ['success', 'sự thành công', 'Hard work leads to success.', 'Chăm chỉ dẫn đến thành công.'],
        ['fail', 'thất bại', 'Do not be afraid to fail.', 'Đừng sợ thất bại.'],
        ['failure', 'sự thất bại', 'Failure is part of learning.', 'Thất bại là một phần của việc học.'],
        ['mistake', 'sai lầm', 'We learn from our mistakes.', 'Chúng ta học từ sai lầm của mình.'],
        ['effort', 'nỗ lực', 'It takes a lot of effort.', 'Việc này đòi hỏi nhiều nỗ lực.'],
        ['determination', 'quyết tâm', 'She showed great determination.', 'Cô ấy thể hiện quyết tâm lớn.'],
        ['motivation', 'động lực', 'I lost my motivation.', 'Tôi mất động lực rồi.'],
        ['motivated', 'có động lực', 'He is highly motivated.', 'Anh ấy rất có động lực.'],
        ['discipline', 'kỷ luật', 'Studying requires discipline.', 'Học tập đòi hỏi kỷ luật.'],
        ['habit', 'thói quen', 'Reading every day is a good habit.', 'Đọc sách mỗi ngày là thói quen tốt.'],
        ['obstacle', 'trở ngại', 'We faced many obstacles.', 'Chúng tôi gặp nhiều trở ngại.'],
        ['challenge', 'thử thách', 'Learning a language is a challenge.', 'Học một ngôn ngữ là một thử thách.'],
        ['overcome', 'vượt qua', 'She overcame her fear of speaking.', 'Cô ấy vượt qua nỗi sợ nói trước đám đông.'],
        ['give up', 'bỏ cuộc', 'Never give up on your dreams.', 'Đừng bao giờ từ bỏ ước mơ.'],
        ['keep going', 'tiếp tục cố gắng', 'Keep going. You are almost there.', 'Cứ tiếp tục. Bạn gần tới rồi.'],
        ['come true', 'trở thành hiện thực', 'I hope your dream will come true.', 'Tôi hy vọng ước mơ của bạn trở thành hiện thực.'],
        ['set up', 'thành lập, thiết lập', 'He wants to set up his own business.', 'Anh ấy muốn lập doanh nghiệp riêng.'],
        ['take up', 'bắt đầu theo đuổi', 'I want to take up painting.', 'Tôi muốn bắt đầu học vẽ.'],
        ['commitment', 'sự cam kết, tận tâm', 'Success needs commitment.', 'Thành công cần sự cam kết.'],
      ],
      patterns: [
        ['What are you going to do after you graduate?', 'Bạn sẽ làm gì sau khi tốt nghiệp?'],
        ['My dream is to start my own business one day.', 'Ước mơ của tôi là một ngày nào đó mở doanh nghiệp riêng.'],
        ['I hope to save enough money to travel around the world.', 'Tôi hy vọng để dành đủ tiền để đi du lịch vòng quanh thế giới.'],
        ['If you work hard, your dreams will come true.', 'Nếu bạn chăm chỉ, ước mơ sẽ thành hiện thực.'],
        ['I am looking forward to starting my new job next month.', 'Tôi đang mong chờ bắt đầu công việc mới vào tháng sau.'],
      ],
      dialogue: [
        ['A', 'What are your plans for next year?', 'Kế hoạch của bạn cho năm sau là gì?'],
        ['B', 'I am going to apply for a master\'s degree abroad.', 'Tôi sẽ nộp đơn học thạc sĩ ở nước ngoài.'],
        ['A', 'That is a big decision. Why do you want to study abroad?', 'Đó là một quyết định lớn. Sao bạn muốn đi du học?'],
        ['B', 'I want to improve my English and learn new skills.', 'Tôi muốn cải thiện tiếng Anh và học những kỹ năng mới.'],
        ['A', 'What is your long-term goal?', 'Mục tiêu dài hạn của bạn là gì?'],
        ['B', 'To work as a researcher and help my country.', 'Làm nhà nghiên cứu và giúp ích cho đất nước.'],
      ],
    },
  ],
  reads: {
    'thien-nhien-dong-vat': {
      title: 'A Weekend in Cat Tien National Park',
      text: 'Last weekend, my friends and I visited a national park in the south of Vietnam. We left the city early in the morning and arrived at the entrance at nine. A local guide led us along a narrow trail through the forest. It was quiet and peaceful, and the air was cool and fresh. We saw colorful birds, butterflies and even a family of monkeys playing in the trees. The guide told us that the park is home to many rare and endangered animals, such as elephants and tigers, but they are very hard to see. In the afternoon, we sat by a lake and watched the sunset. We did not leave any litter because we want to protect nature. It was one of the most relaxing trips of my life.',
      vi: 'Tác giả và bạn đi vườn quốc gia, đi bộ trong rừng, thấy chim, bướm, khỉ; ngắm hoàng hôn bên hồ và không xả rác để bảo vệ thiên nhiên.',
      qs: [
        ['Who led them along the trail?', ['A park ranger', 'A local guide', 'A teacher', 'A tourist'], 1],
        ['What did they see in the trees?', ['A family of monkeys', 'A tiger', 'A snake', 'An elephant'], 0],
        ['Why did they not leave any litter?', ['They were in a hurry.', 'They want to protect nature.', 'There was no bin.', 'The guide was strict.'], 1],
      ],
    },
    'le-hoi-van-hoa': {
      title: 'Tet in Vietnam',
      text: 'Tet, the Vietnamese New Year, is the most important holiday of the year. It follows the lunar calendar and usually falls in January or February. Weeks before Tet, families clean their houses, buy new clothes and prepare traditional food such as sticky rice cakes. On the last night of the year, many people watch fireworks and wait for the new year to begin. During Tet, relatives visit each other and exchange good wishes. Children receive lucky money in red envelopes, and many families go to the temple to pray for health and luck. People also believe that the first visitor of the year can bring good or bad fortune. Above all, Tet is a time for family reunions and for remembering ancestors.',
      vi: 'Tết là dịp lễ quan trọng nhất: dọn nhà, nấu món truyền thống, xem pháo hoa, chúc nhau, lì xì, đi chùa và sum họp gia đình.',
      qs: [
        ['What calendar does Tet follow?', ['The solar calendar', 'The lunar calendar', 'The school calendar', 'The tourist calendar'], 1],
        ['What do children receive?', ['Lucky money in red envelopes', 'New shoes', 'Fireworks', 'Books'], 0],
        ['What is Tet above all?', ['A time for shopping', 'A time for family reunions', 'A time for exams', 'A time for work'], 1],
      ],
    },
    'tim-viec-phong-van': {
      title: 'Preparing for a Job Interview',
      text: 'A job interview can be stressful, but good preparation helps you feel confident. First, research the company: learn what it does, what values it has and who its customers are. Read the job advertisement again and think about how your skills match the position. Prepare answers to common questions, such as "Tell me about yourself" and "What are your strengths and weaknesses?". On the day of the interview, dress neatly, arrive ten minutes early and bring a copy of your resume. During the interview, listen carefully, speak clearly and give examples from your experience. Finally, prepare one or two questions to ask the interviewer. This shows that you are interested. Afterwards, send a short thank-you email.',
      vi: 'Chuẩn bị phỏng vấn: tìm hiểu công ty, so khớp kỹ năng, chuẩn bị câu trả lời, ăn mặc gọn gàng, đến sớm, nêu ví dụ, hỏi lại và gửi email cảm ơn.',
      qs: [
        ['What should you do first?', ['Research the company', 'Ask for a salary', 'Send a thank-you email', 'Resign'], 0],
        ['When should you arrive?', ['Late', 'Ten minutes early', 'One hour early', 'The next day'], 1],
        ['Why should you prepare questions for the interviewer?', ['It shows you are interested.', 'It saves time.', 'It is a rule.', 'It confuses them.'], 0],
      ],
    },
    'ke-hoach-uoc-mo': {
      title: 'From Dream to Plan',
      text: 'Many people have dreams, but few of them turn their dreams into plans. A dream becomes a goal when you write it down and give it a deadline. For example, if you dream of speaking English fluently, you might set a long-term goal of passing an international exam in two years. Then divide it into short-term steps: learn ten new words every day, practice speaking twice a week and read one article each morning. It is important to build good habits and keep a schedule. You will probably meet obstacles, such as a lack of time or motivation. When that happens, remember why you started and do not give up. Small, regular efforts are more powerful than a sudden burst of energy. Over time, your progress will give you confidence, and your dream will come true.',
      vi: 'Biến ước mơ thành kế hoạch: viết ra, đặt hạn chót, chia thành bước ngắn hạn, xây thói quen, vượt trở ngại và kiên trì.',
      qs: [
        ['When does a dream become a goal?', ['When you forget it', 'When you write it down and give it a deadline', 'When you tell a friend', 'When you sleep'], 1],
        ['What is an example of a short-term step?', ['Passing an exam in two years', 'Learning ten new words every day', 'Moving abroad', 'Buying a car'], 1],
        ['What should you do when you meet obstacles?', ['Give up', 'Remember why you started', 'Change your dream', 'Stop practicing'], 1],
      ],
    },
  },
  defs: `
nature = everything in the world that is not made by people
countryside = land outside towns, with fields and villages
forest = a large area covered with trees
jungle = a thick tropical forest
mountain = a very high hill
valley = low land between hills
hill = a raised area of land, lower than a mountain
river = a large natural stream of water
lake = a large area of water surrounded by land
waterfall = water falling from a high place
island = land surrounded by water
desert = a dry area with little rain
coast = land next to the sea
cave = a large hole in the side of a hill
landscape = everything you can see in an area of land
scenery = the natural features of a place that you see
sunrise = the time when the sun comes up
sunset = the time when the sun goes down
wildlife = wild animals and plants
wild = living in nature, not kept by people
pet = an animal kept at home
farm animal = an animal kept on a farm
bird = an animal with feathers and wings
butterfly = an insect with large colorful wings
bee = an insect that makes honey
insect = a small animal with six legs
snake = a long thin animal with no legs
monkey = an animal with a long tail that climbs trees
elephant = a very large animal with a trunk
tiger = a large wild cat with stripes
dolphin = an intelligent sea animal like a small whale
whale = a very large sea animal
turtle = an animal with a hard shell
tree = a tall plant with a trunk and branches
flower = the colorful part of a plant
grass = a green plant that covers the ground
leaf = a flat green part of a plant
branch = a part of a tree that grows from the trunk
bush = a small thick plant
path = a narrow way for walking
trail = a path through the countryside
hiking = walking long distances in the countryside
camp = to stay in a tent for a short time
tent = a shelter made of cloth
campfire = a fire made outside at a camp
national park = a large area of land protected by the government
reserve = an area of land kept for protecting animals
protect = to keep safe from harm
endangered = in danger of disappearing completely
extinct = no longer existing
litter = rubbish left in public places
fresh air = clean air outdoors
peaceful = calm and quiet
festival = a special day or period of celebration
celebrate = to do something enjoyable for a special occasion
celebration = an event to mark a special occasion
holiday = a day when people do not work
tradition = a custom passed down for many years
custom = something people usually do in a society
ceremony = a formal event on a special occasion
ritual = a fixed series of actions in a ceremony
lunar calendar = a calendar based on the moon
New Year = the first day of the year
Mid-Autumn Festival = a festival of lanterns and mooncakes
Christmas = a Christian festival on 25 December
Easter = a Christian festival in spring
fireworks = explosives that make bright lights in the sky
parade = a public procession of people celebrating
costume = clothes worn for a special occasion
decoration = something used to make a place look nice
lantern = a lamp with a cover that you can carry
feast = a large, special meal
traditional food = food that has been eaten for many generations
gift = something you give to someone
present = a gift
wrap = to cover something with paper
greeting card = a card with a message for a special day
wish = to hope good things for someone
congratulations = words said to someone for their success
toast = a drink taken to wish someone happiness
invite = to ask someone to come to an event
invitation = a request to come to an event
guest = a person invited to an event
host = a person who invites and welcomes guests
wedding = a ceremony in which two people marry
bride = a woman who is getting married
groom = a man who is getting married
anniversary = a yearly date of an important event
birthday = the day you were born, celebrated each year
ancestor = a family member who lived long ago
altar = a table used in religious ceremonies
incense = a substance that gives a sweet smell when burned
temple = a building for worship
pray = to speak to a god
lucky = having good fortune
luck = good things that happen by chance
superstition = a belief in magical causes
reunion = a meeting of people after a long time
pass down = to give knowledge to younger people
cultural = relating to the arts and customs of a society
religious = connected with religion
public holiday = an official day off work for everyone
take part in = to be involved in an activity
spectator = a person who watches an event
vacancy = a job that is available
job advertisement = a notice offering a job
position = a job
apply = to ask formally for a job
applicant = a person who applies for a job
candidate = a person who is being considered for a job
application form = a paper for applying for a job
resume = a document showing your education and work history
cover letter = a letter sent with your resume
reference = a person who says good things about you to an employer
qualification = an exam or course you have passed
degree = a university qualification
experience = knowledge gained from doing something
skill = the ability to do something well
strength = a good quality of a person
weakness = a quality that is not good
achievement = something you have done successfully
responsibility = a duty you have to do
interview = a formal meeting to ask someone questions
interviewer = a person who asks questions in an interview
shortlist = a list of the best candidates
first impression = the opinion you form when you first meet someone
dress code = rules about what to wear
punctual = arriving at the right time
prepare = to get ready
research = to find out about something
why = used to ask for a reason
motivation = the reason you want to do something
team player = a person who works well with others
deal with = to handle a situation
salary = money paid regularly for work
benefits = extra things given by an employer
negotiate = to discuss to reach an agreement
offer = a formal statement that you can have a job
accept = to say yes to an offer
decline = to politely say no to an offer
contract = a legal agreement about work
probation = a trial period at the start of a job
permanent = lasting for a long time
temporary = lasting for a short time
freelance = working for different companies and not employed by one
internship = a short period of work to gain experience
career = the jobs you do during your working life
promotion = a move to a higher position
resign = to officially leave your job
notice = a formal warning that you will leave a job
unemployed = without a job
recruit = to find and employ new people
hire = to employ someone
good fit = suitable for a particular job or team
intend = to plan to do something
hope = to want something to happen
dream = something you very much want to achieve
ambition = a strong wish to succeed
aim = something you want to achieve
objective = a specific thing you want to achieve
priority = something that is more important than others
decision = a choice you make
decide = to make a choice
choice = the act of choosing
option = one of several things you can choose
opportunity = a chance to do something good
chance = a possibility
possibility = something that might happen
probably = very likely
definitely = without doubt
maybe = perhaps
look forward to = to wait with pleasure for something
be going to = to plan to do something
in the future = at a time after now
short-term = lasting a short time
long-term = lasting a long time
schedule = a plan of times when things will happen
step = one stage in a process
progress = movement toward a goal
achieve = to succeed in doing something
succeed = to do what you wanted to do
success = the achievement of what you wanted
failure = lack of success
effort = hard work or energy used to do something
determination = a firm decision to do something
motivated = having a strong reason to do something
discipline = the ability to control yourself
habit = something you do regularly
obstacle = something that stops you from progressing
challenge = something difficult that tests your ability
overcome = to deal successfully with a problem
give up = to stop trying
keep going = to continue
come true = to happen as you hoped
set up = to start something such as a business
take up = to start doing a new activity

## ghi đè theo chủ đề
tim-viec-phong-van|interview = a formal meeting where an employer asks a candidate questions
tim-viec-phong-van|reference = a person who says good things about you to an employer
tim-viec-phong-van|experience = knowledge and skill you have gained from past jobs
ke-hoach-uoc-mo|mistake = something you did wrong
ke-hoach-uoc-mo|goal = something you want to achieve
tim-viec-phong-van|degree = a qualification given by a university
thien-nhien-dong-vat|reserve = an area of land kept for protecting animals
le-hoi-van-hoa|present = a gift
ke-hoach-uoc-mo|target = a number or amount you aim to reach
thien-nhien-dong-vat|insect = a small animal with six legs
thien-nhien-dong-vat|camp = to stay in a tent for a short time
tim-viec-phong-van|motivation = the reason you want to do something
commitment = a strong promise or dedication to something
ke-hoach-uoc-mo|plan = an idea of what you will do in the future
thien-nhien-dong-vat|landscape = everything you can see in an area of land
le-hoi-van-hoa|host = a person who invites guests and welcomes them
ke-hoach-uoc-mo|fail = to not succeed in what you try to do
`,
};
