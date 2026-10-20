// Đợt 4 chủ đề giao tiếp (B2): nhà ở & bất động sản, quan hệ & xã giao, sức khỏe tinh thần, khởi nghiệp.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'nha-o-bat-dong-san', title: 'Nhà ở & bất động sản', icon: '🏘️', level: 'B2',
      desc: 'Thuê nhà, mua nhà, vay thế chấp, hợp đồng, môi giới và vấn đề nhà ở đô thị.',
      words: [
        ['real estate', 'bất động sản', 'He works in real estate.', 'Anh ấy làm trong ngành bất động sản.'],
        ['property', 'tài sản, bất động sản', 'The property is close to the station.', 'Bất động sản này gần nhà ga.'],
        ['estate agent', 'nhân viên môi giới', 'The estate agent showed us three flats.', 'Nhân viên môi giới cho chúng tôi xem ba căn hộ.'],
        ['landlord', 'chủ nhà (cho thuê)', 'The landlord lives upstairs.', 'Chủ nhà sống ở tầng trên.'],
        ['tenant', 'người thuê nhà', 'The tenants must pay on the first of each month.', 'Người thuê phải trả vào ngày đầu mỗi tháng.'],
        ['lease', 'hợp đồng thuê', 'We signed a one-year lease.', 'Chúng tôi ký hợp đồng thuê một năm.'],
        ['rent', 'tiền thuê nhà', 'The rent is five hundred dollars a month.', 'Tiền thuê nhà là năm trăm đô một tháng.'],
        ['deposit', 'tiền đặt cọc', 'You must pay a deposit of two months.', 'Bạn phải đặt cọc hai tháng tiền.'],
        ['utilities', 'tiện ích (điện nước)', 'The rent does not include utilities.', 'Tiền thuê chưa gồm điện nước.'],
        ['furnished', 'có sẵn nội thất', 'We are looking for a furnished apartment.', 'Chúng tôi đang tìm căn hộ có sẵn nội thất.'],
        ['unfurnished', 'không có nội thất', 'An unfurnished flat is cheaper.', 'Căn hộ không nội thất rẻ hơn.'],
        ['studio', 'căn hộ studio', 'She lives in a small studio.', 'Cô ấy sống trong một căn studio nhỏ.'],
        ['detached house', 'nhà riêng biệt', 'They bought a detached house in the suburbs.', 'Họ mua một ngôi nhà riêng biệt ở ngoại ô.'],
        ['semi-detached', 'nhà liền kề một bên', 'A semi-detached house shares one wall.', 'Nhà liền kề chung một bức tường.'],
        ['terraced house', 'nhà phố liền kề', 'Terraced houses are common in old cities.', 'Nhà phố liền kề phổ biến ở các thành phố cổ.'],
        ['high-rise', 'nhà cao tầng', 'Many people live in high-rise buildings.', 'Nhiều người sống trong các tòa nhà cao tầng.'],
        ['suburb', 'vùng ngoại ô', 'We moved to a quiet suburb.', 'Chúng tôi chuyển đến một vùng ngoại ô yên tĩnh.'],
        ['neighborhood', 'khu dân cư', 'It is a friendly neighborhood.', 'Đó là khu dân cư thân thiện.'],
        ['location', 'vị trí', 'Location is the most important factor.', 'Vị trí là yếu tố quan trọng nhất.'],
        ['convenient', 'thuận tiện', 'The flat is convenient for the metro.', 'Căn hộ thuận tiện gần tàu điện ngầm.'],
        ['spacious', 'rộng rãi', 'The living room is bright and spacious.', 'Phòng khách sáng và rộng rãi.'],
        ['cramped', 'chật chội', 'The room felt cramped.', 'Căn phòng có cảm giác chật chội.'],
        ['modern', 'hiện đại', 'The kitchen is modern.', 'Nhà bếp hiện đại.'],
        ['renovate', 'cải tạo', 'They renovated the old house.', 'Họ cải tạo ngôi nhà cũ.'],
        ['renovation', 'sự cải tạo', 'The renovation took six months.', 'Việc cải tạo mất sáu tháng.'],
        ['maintenance', 'bảo trì', 'The landlord pays for maintenance.', 'Chủ nhà trả tiền bảo trì.'],
        ['repair', 'sửa chữa', 'The roof needs repair.', 'Mái nhà cần sửa chữa.'],
        ['leak', 'chỗ rò rỉ', 'There is a leak in the bathroom.', 'Có chỗ rò rỉ trong phòng tắm.'],
        ['damp', 'ẩm ướt', 'The walls are damp.', 'Các bức tường bị ẩm.'],
        ['insulation', 'cách nhiệt', 'Good insulation saves energy.', 'Cách nhiệt tốt tiết kiệm năng lượng.'],
        ['heating', 'hệ thống sưởi', 'The heating is included.', 'Đã bao gồm hệ thống sưởi.'],
        ['mortgage', 'khoản vay thế chấp', 'They took out a twenty-year mortgage.', 'Họ vay thế chấp hai mươi năm.'],
        ['down payment', 'tiền trả trước', 'We saved for a down payment.', 'Chúng tôi dành dụm tiền trả trước.'],
        ['interest rate', 'lãi suất', 'The interest rate went up last month.', 'Lãi suất tăng vào tháng trước.'],
        ['instalment', 'khoản trả góp', 'We pay the mortgage in monthly instalments.', 'Chúng tôi trả vay thế chấp theo từng tháng.'],
        ['afford', 'đủ khả năng mua', 'Few young people can afford a house.', 'Ít người trẻ đủ khả năng mua nhà.'],
        ['affordable', 'giá phải chăng', 'The city needs more affordable housing.', 'Thành phố cần nhiều nhà ở giá phải chăng hơn.'],
        ['price', 'giá', 'House prices have doubled.', 'Giá nhà đã tăng gấp đôi.'],
        ['value', 'giá trị', 'The value of the property increased.', 'Giá trị bất động sản đã tăng.'],
        ['invest', 'đầu tư', 'Many people invest in property.', 'Nhiều người đầu tư vào bất động sản.'],
        ['buyer', 'người mua', 'The buyer made an offer.', 'Người mua đưa ra giá đề nghị.'],
        ['seller', 'người bán', 'The seller accepted the offer.', 'Người bán chấp nhận giá đề nghị.'],
        ['viewing', 'buổi xem nhà', 'We arranged a viewing for Saturday.', 'Chúng tôi sắp xếp buổi xem nhà vào thứ Bảy.'],
        ['negotiate', 'thương lượng', 'You can negotiate the price.', 'Bạn có thể thương lượng giá.'],
        ['contract', 'hợp đồng', 'Read the contract carefully before signing.', 'Hãy đọc kỹ hợp đồng trước khi ký.'],
        ['ownership', 'quyền sở hữu', 'The ownership of the land is unclear.', 'Quyền sở hữu mảnh đất chưa rõ ràng.'],
        ['land', 'đất', 'He bought a piece of land near the coast.', 'Anh ấy mua một mảnh đất gần bờ biển.'],
        ['planning permission', 'giấy phép xây dựng', 'You need planning permission to build.', 'Bạn cần giấy phép xây dựng để xây nhà.'],
        ['developer', 'chủ đầu tư', 'The developer is building 200 apartments.', 'Chủ đầu tư đang xây 200 căn hộ.'],
        ['construction', 'xây dựng', 'Construction will finish next year.', 'Việc xây dựng sẽ hoàn thành vào năm sau.'],
        ['eviction', 'sự đuổi khỏi nhà', 'The tenant faced eviction.', 'Người thuê đối mặt với việc bị đuổi ra khỏi nhà.'],
        ['homeless', 'vô gia cư', 'The charity helps homeless people.', 'Tổ chức từ thiện giúp người vô gia cư.'],
        ['overcrowded', 'quá đông đúc', 'The city is overcrowded.', 'Thành phố quá đông đúc.'],
        ['housing shortage', 'thiếu nhà ở', 'The housing shortage pushes prices up.', 'Tình trạng thiếu nhà ở đẩy giá lên.'],
      ],
      patterns: [
        ['I am looking for a two-bedroom flat close to the city center.', 'Tôi đang tìm một căn hộ hai phòng ngủ gần trung tâm thành phố.'],
        ['How much is the monthly rent, and are utilities included?', 'Tiền thuê mỗi tháng là bao nhiêu và đã gồm điện nước chưa?'],
        ['The landlord is responsible for major repairs.', 'Chủ nhà chịu trách nhiệm sửa chữa lớn.'],
        ['We have been saving for years to pay the down payment.', 'Chúng tôi đã tiết kiệm nhiều năm để trả tiền trả trước.'],
        ['Property prices have risen sharply in recent years.', 'Giá bất động sản đã tăng mạnh trong những năm gần đây.'],
      ],
      dialogue: [
        ['Agent', 'This flat has two bedrooms and a small balcony. The rent is six hundred a month.', 'Căn hộ này có hai phòng ngủ và một ban công nhỏ. Tiền thuê là sáu trăm một tháng.'],
        ['Tenant', 'Does that include utilities?', 'Giá đó đã bao gồm điện nước chưa?'],
        ['Agent', 'No, you pay electricity and water separately.', 'Chưa, bạn trả tiền điện và nước riêng.'],
        ['Tenant', 'And how much is the deposit?', 'Còn tiền đặt cọc là bao nhiêu?'],
        ['Agent', 'Two months\' rent, which you get back when you move out.', 'Hai tháng tiền thuê, và bạn sẽ được hoàn lại khi chuyển đi.'],
        ['Tenant', 'Good. Can I have a look at the contract before I decide?', 'Được. Tôi xem hợp đồng trước khi quyết định được không?'],
      ],
    },
    {
      id: 'quan-he-xa-giao', title: 'Mối quan hệ & kỹ năng xã giao', icon: '🤝', level: 'B2',
      desc: 'Làm quen, duy trì tình bạn, giải quyết mâu thuẫn, từ chối và tạo thiện cảm.',
      words: [
        ['relationship', 'mối quan hệ', 'They have a close relationship.', 'Họ có mối quan hệ thân thiết.'],
        ['acquaintance', 'người quen', 'He is just an acquaintance.', 'Anh ấy chỉ là người quen.'],
        ['close friend', 'bạn thân', 'She is my closest friend.', 'Cô ấy là người bạn thân nhất của tôi.'],
        ['colleague', 'đồng nghiệp', 'I get along well with my colleagues.', 'Tôi hòa thuận với đồng nghiệp.'],
        ['partner', 'bạn đời, đối tác', 'She lives with her partner.', 'Cô ấy sống cùng bạn đời.'],
        ['social skills', 'kỹ năng xã hội', 'Good social skills help you at work.', 'Kỹ năng xã hội tốt giúp bạn trong công việc.'],
        ['small talk', 'chuyện phiếm', 'I am not good at small talk.', 'Tôi không giỏi nói chuyện phiếm.'],
        ['break the ice', 'phá vỡ sự ngại ngùng', 'A joke can break the ice.', 'Một câu đùa có thể phá vỡ sự ngại ngùng.'],
        ['get to know', 'tìm hiểu, làm quen', 'I would like to get to know you better.', 'Tôi muốn hiểu bạn rõ hơn.'],
        ['make friends', 'kết bạn', 'It is easy to make friends at university.', 'Rất dễ kết bạn ở đại học.'],
        ['keep in touch', 'giữ liên lạc', 'We keep in touch by email.', 'Chúng tôi giữ liên lạc qua email.'],
        ['lose touch', 'mất liên lạc', 'We lost touch after school.', 'Chúng tôi mất liên lạc sau khi ra trường.'],
        ['get along', 'hòa hợp', 'They get along very well.', 'Họ hòa hợp với nhau rất tốt.'],
        ['have in common', 'có điểm chung', 'We have a lot in common.', 'Chúng tôi có nhiều điểm chung.'],
        ['rely on', 'dựa vào', 'You can rely on me.', 'Bạn có thể dựa vào tôi.'],
        ['trust', 'sự tin tưởng', 'Trust is the basis of friendship.', 'Tin tưởng là nền tảng của tình bạn.'],
        ['loyal', 'trung thành', 'He is a loyal friend.', 'Anh ấy là người bạn trung thành.'],
        ['supportive', 'ủng hộ', 'My family is very supportive.', 'Gia đình tôi rất ủng hộ.'],
        ['considerate', 'chu đáo', 'She is always considerate of others.', 'Cô ấy luôn chu đáo với người khác.'],
        ['sympathetic', 'thông cảm', 'He was sympathetic when I lost my job.', 'Anh ấy thông cảm khi tôi mất việc.'],
        ['empathy', 'sự đồng cảm', 'Empathy helps us understand others.', 'Sự đồng cảm giúp ta hiểu người khác.'],
        ['good listener', 'người biết lắng nghe', 'A good listener makes people feel valued.', 'Người biết lắng nghe làm người khác thấy được trân trọng.'],
        ['tactful', 'khéo léo', 'She is tactful when she gives advice.', 'Cô ấy khéo léo khi đưa lời khuyên.'],
        ['diplomatic', 'ngoại giao, khéo xử', 'Try to be more diplomatic.', 'Hãy cố tỏ ra khéo xử hơn.'],
        ['compliment', 'lời khen', 'He gave me a nice compliment.', 'Anh ấy dành cho tôi một lời khen dễ chịu.'],
        ['criticism', 'lời phê bình', 'Accept criticism calmly.', 'Hãy đón nhận lời phê bình một cách bình tĩnh.'],
        ['advice', 'lời khuyên', 'Thank you for your advice.', 'Cảm ơn lời khuyên của bạn.'],
        ['apologize', 'xin lỗi', 'I apologize for my mistake.', 'Tôi xin lỗi vì lỗi của mình.'],
        ['forgive', 'tha thứ', 'It is hard to forgive a lie.', 'Khó tha thứ cho một lời nói dối.'],
        ['misunderstanding', 'sự hiểu lầm', 'It was just a misunderstanding.', 'Đó chỉ là một sự hiểu lầm.'],
        ['argument', 'cuộc cãi vã', 'They had an argument about money.', 'Họ cãi nhau về tiền bạc.'],
        ['conflict', 'mâu thuẫn', 'We solved the conflict peacefully.', 'Chúng tôi giải quyết mâu thuẫn trong hòa bình.'],
        ['tension', 'căng thẳng', 'There was tension between them.', 'Có sự căng thẳng giữa họ.'],
        ['resolve', 'giải quyết', 'Let us try to resolve this issue.', 'Hãy cố giải quyết vấn đề này.'],
        ['compromise', 'sự nhượng bộ', 'We reached a compromise.', 'Chúng tôi đã đạt được sự thỏa hiệp.'],
        ['agree to disagree', 'đồng ý là bất đồng', 'We agreed to disagree.', 'Chúng tôi đồng ý là mỗi người một ý.'],
        ['turn down', 'từ chối', 'He turned down my invitation.', 'Anh ấy từ chối lời mời của tôi.'],
        ['politely', 'một cách lịch sự', 'She politely refused the offer.', 'Cô ấy từ chối lời đề nghị một cách lịch sự.'],
        ['boundary', 'ranh giới', 'It is important to set boundaries.', 'Đặt ranh giới là điều quan trọng.'],
        ['privacy', 'sự riêng tư', 'Respect other people\'s privacy.', 'Hãy tôn trọng sự riêng tư của người khác.'],
        ['peer pressure', 'áp lực bạn bè', 'Teenagers often feel peer pressure.', 'Thanh thiếu niên thường chịu áp lực từ bạn bè.'],
        ['reputation', 'danh tiếng', 'She has a good reputation.', 'Cô ấy có danh tiếng tốt.'],
        ['networking', 'xây dựng mạng lưới quan hệ', 'Networking is important in business.', 'Xây dựng quan hệ rất quan trọng trong kinh doanh.'],
        ['introduce', 'giới thiệu', 'Let me introduce you to my manager.', 'Để tôi giới thiệu bạn với quản lý của tôi.'],
        ['mutual', 'chung, qua lại', 'We have a mutual friend.', 'Chúng tôi có một người bạn chung.'],
        ['etiquette', 'phép xã giao', 'Business etiquette varies between countries.', 'Phép xã giao trong kinh doanh khác nhau giữa các nước.'],
        ['manners', 'cách cư xử', 'He has good manners.', 'Anh ấy cư xử lịch sự.'],
        ['gossip', 'chuyện ngồi lê đôi mách', 'I do not like office gossip.', 'Tôi không thích chuyện ngồi lê đôi mách ở văn phòng.'],
        ['reconcile', 'làm hòa', 'They reconciled after a long argument.', 'Họ làm hòa sau cuộc cãi vã dài.'],
        ['drift apart', 'dần xa cách', 'Old friends sometimes drift apart.', 'Bạn cũ đôi khi dần xa cách nhau.'],
        ['bond', 'sự gắn kết', 'Shared experiences create a strong bond.', 'Những trải nghiệm chung tạo nên sự gắn kết mạnh.'],
      ],
      patterns: [
        ['I really appreciate your help, and I hope I can return the favor someday.', 'Tôi thật sự trân trọng sự giúp đỡ của bạn và hy vọng sẽ có dịp đền đáp.'],
        ['I am sorry if I upset you; it was not my intention.', 'Tôi xin lỗi nếu đã làm bạn buồn; đó không phải ý định của tôi.'],
        ['Let us try to see things from each other\'s point of view.', 'Hãy cố nhìn sự việc từ góc nhìn của nhau.'],
        ['Thank you for inviting me, but I am afraid I cannot make it.', 'Cảm ơn bạn đã mời, nhưng tôi e là tôi không đến được.'],
        ['We have been friends since childhood, and we still keep in touch.', 'Chúng tôi là bạn từ nhỏ và vẫn giữ liên lạc.'],
      ],
      dialogue: [
        ['A', 'I heard you and Lan had an argument.', 'Mình nghe nói bạn và Lan đã cãi nhau.'],
        ['B', 'Yes, it was a misunderstanding, but we have not spoken for a week.', 'Ừ, đó là một sự hiểu lầm, nhưng tuần rồi chúng mình không nói chuyện.'],
        ['A', 'Maybe you should talk to her. Friendship is more important than pride.', 'Có lẽ bạn nên nói chuyện với cô ấy. Tình bạn quan trọng hơn lòng tự ái.'],
        ['B', 'You are right. I will call her tonight and apologize.', 'Bạn nói đúng. Tối nay mình sẽ gọi và xin lỗi cô ấy.'],
        ['A', 'I am sure she will understand.', 'Mình chắc cô ấy sẽ hiểu.'],
        ['B', 'Thanks for your advice. You are a good listener.', 'Cảm ơn lời khuyên của bạn. Bạn là người biết lắng nghe.'],
      ],
    },
    {
      id: 'suc-khoe-tinh-than', title: 'Sức khỏe tinh thần & lối sống', icon: '🧘', level: 'B2',
      desc: 'Căng thẳng, ngủ nghỉ, dinh dưỡng, thiền, tư vấn tâm lý và thói quen lành mạnh.',
      words: [
        ['mental health', 'sức khỏe tinh thần', 'Mental health is as important as physical health.', 'Sức khỏe tinh thần quan trọng như sức khỏe thể chất.'],
        ['well-being', 'sự khỏe mạnh, hạnh phúc', 'Exercise improves your well-being.', 'Tập thể dục cải thiện sự khỏe mạnh của bạn.'],
        ['stress', 'căng thẳng', 'Work stress can affect your sleep.', 'Căng thẳng công việc có thể ảnh hưởng giấc ngủ.'],
        ['anxiety', 'chứng lo âu', 'She suffers from anxiety.', 'Cô ấy bị chứng lo âu.'],
        ['depression', 'trầm cảm', 'Depression is a serious illness.', 'Trầm cảm là một bệnh nghiêm trọng.'],
        ['burnout', 'kiệt sức vì công việc', 'Long hours can lead to burnout.', 'Làm việc nhiều giờ có thể dẫn đến kiệt sức.'],
        ['pressure', 'áp lực', 'He works well under pressure.', 'Anh ấy làm việc tốt dưới áp lực.'],
        ['overwhelmed', 'quá tải', 'I feel overwhelmed by the workload.', 'Tôi thấy quá tải vì khối lượng việc.'],
        ['worry', 'lo lắng', 'Try not to worry too much.', 'Cố đừng lo lắng quá nhiều.'],
        ['mood swings', 'tâm trạng thất thường', 'Lack of sleep causes mood swings.', 'Thiếu ngủ gây tâm trạng thất thường.'],
        ['insomnia', 'chứng mất ngủ', 'He has suffered from insomnia for months.', 'Anh ấy bị mất ngủ nhiều tháng.'],
        ['sleep', 'giấc ngủ', 'Adults need seven to eight hours of sleep.', 'Người lớn cần bảy đến tám giờ ngủ.'],
        ['routine', 'thói quen đều đặn', 'A regular routine helps you sleep.', 'Một thói quen đều đặn giúp bạn ngủ ngon.'],
        ['relax', 'thư giãn', 'I relax by listening to music.', 'Tôi thư giãn bằng cách nghe nhạc.'],
        ['relaxation', 'sự thư giãn', 'Relaxation techniques reduce stress.', 'Kỹ thuật thư giãn làm giảm căng thẳng.'],
        ['meditation', 'thiền', 'Meditation helps me stay calm.', 'Thiền giúp tôi giữ bình tĩnh.'],
        ['mindfulness', 'chánh niệm', 'Mindfulness means paying attention to the present moment.', 'Chánh niệm là chú tâm vào hiện tại.'],
        ['breathe', 'thở', 'Breathe deeply and slowly.', 'Hãy thở sâu và chậm.'],
        ['yoga', 'yoga', 'Yoga improves flexibility.', 'Yoga cải thiện độ dẻo dai.'],
        ['exercise', 'tập thể dục', 'Regular exercise reduces anxiety.', 'Tập thể dục đều đặn làm giảm lo âu.'],
        ['workout', 'buổi tập luyện', 'I do a short workout every morning.', 'Tôi tập một buổi ngắn mỗi sáng.'],
        ['fitness', 'thể lực', 'Her fitness has improved a lot.', 'Thể lực của cô ấy đã cải thiện nhiều.'],
        ['balanced diet', 'chế độ ăn cân bằng', 'A balanced diet includes vegetables and protein.', 'Chế độ ăn cân bằng gồm rau và protein.'],
        ['nutrition', 'dinh dưỡng', 'Good nutrition supports a healthy mind.', 'Dinh dưỡng tốt hỗ trợ tinh thần khỏe mạnh.'],
        ['junk food', 'đồ ăn vặt không lành mạnh', 'Avoid too much junk food.', 'Tránh ăn quá nhiều đồ ăn vặt.'],
        ['vitamin', 'vitamin', 'Fruit is rich in vitamins.', 'Trái cây giàu vitamin.'],
        ['hydration', 'sự đủ nước', 'Hydration is important in hot weather.', 'Uống đủ nước rất quan trọng khi trời nóng.'],
        ['caffeine', 'caffeine', 'Caffeine can disturb your sleep.', 'Caffeine có thể làm xáo trộn giấc ngủ.'],
        ['addiction', 'sự nghiện', 'Phone addiction is becoming common.', 'Nghiện điện thoại đang trở nên phổ biến.'],
        ['screen time', 'thời gian dùng màn hình', 'Limit your screen time before bed.', 'Hãy hạn chế thời gian dùng màn hình trước khi ngủ.'],
        ['digital detox', 'cai nghiện công nghệ', 'I did a digital detox for a weekend.', 'Tôi đã cai nghiện công nghệ một cuối tuần.'],
        ['work-life balance', 'cân bằng công việc và cuộc sống', 'Work-life balance is hard to achieve.', 'Cân bằng công việc và cuộc sống khó đạt được.'],
        ['hobby', 'sở thích', 'A hobby helps you forget your worries.', 'Một sở thích giúp bạn quên đi lo âu.'],
        ['support network', 'mạng lưới hỗ trợ', 'A strong support network helps in difficult times.', 'Một mạng lưới hỗ trợ vững chắc giúp ích lúc khó khăn.'],
        ['therapy', 'liệu pháp tâm lý', 'She decided to try therapy.', 'Cô ấy quyết định thử liệu pháp tâm lý.'],
        ['therapist', 'nhà trị liệu', 'My therapist taught me to manage anxiety.', 'Nhà trị liệu dạy tôi kiểm soát lo âu.'],
        ['counselor', 'chuyên viên tư vấn', 'The school counselor was very helpful.', 'Chuyên viên tư vấn của trường rất hữu ích.'],
        ['seek help', 'tìm kiếm sự giúp đỡ', 'Do not be afraid to seek help.', 'Đừng ngại tìm kiếm sự giúp đỡ.'],
        ['stigma', 'sự kỳ thị', 'There is still a stigma around mental illness.', 'Vẫn còn sự kỳ thị đối với bệnh tâm thần.'],
        ['cope', 'đối phó', 'How do you cope with stress?', 'Bạn đối phó với căng thẳng như thế nào?'],
        ['resilience', 'khả năng phục hồi', 'Resilience helps people recover from setbacks.', 'Khả năng phục hồi giúp con người vượt qua thất bại.'],
        ['self-esteem', 'lòng tự trọng', 'Praise builds children\'s self-esteem.', 'Lời khen xây dựng lòng tự trọng cho trẻ.'],
        ['self-care', 'chăm sóc bản thân', 'Self-care is not selfish.', 'Chăm sóc bản thân không phải ích kỷ.'],
        ['positive thinking', 'tư duy tích cực', 'Positive thinking can improve your mood.', 'Tư duy tích cực có thể cải thiện tâm trạng.'],
        ['grateful', 'biết ơn', 'I try to feel grateful every day.', 'Tôi cố cảm thấy biết ơn mỗi ngày.'],
        ['journal', 'nhật ký', 'Writing in a journal helps me think clearly.', 'Viết nhật ký giúp tôi suy nghĩ rõ ràng.'],
        ['cut down on', 'giảm bớt', 'I am trying to cut down on sugar.', 'Tôi đang cố giảm đường.'],
        ['take a break', 'nghỉ giải lao', 'Take a break every hour.', 'Hãy nghỉ giải lao mỗi giờ.'],
        ['unwind', 'thư giãn, xả hơi', 'I go for a walk to unwind.', 'Tôi đi dạo để xả hơi.'],
        ['recharge', 'nạp lại năng lượng', 'A weekend away helps me recharge.', 'Một kỳ nghỉ cuối tuần giúp tôi nạp lại năng lượng.'],
        ['healthy habit', 'thói quen lành mạnh', 'Drinking water is a healthy habit.', 'Uống nước là thói quen lành mạnh.'],
      ],
      patterns: [
        ['Regular exercise and enough sleep can reduce stress and anxiety.', 'Tập thể dục đều đặn và ngủ đủ giấc có thể giảm căng thẳng và lo âu.'],
        ['I try to take a short break every hour to rest my eyes.', 'Tôi cố nghỉ ngắn mỗi giờ để cho mắt nghỉ ngơi.'],
        ['It is important to talk to someone when you feel overwhelmed.', 'Điều quan trọng là nói chuyện với ai đó khi bạn thấy quá tải.'],
        ['Many people struggle to find a balance between work and personal life.', 'Nhiều người vất vả để tìm sự cân bằng giữa công việc và cuộc sống riêng.'],
        ['There should be no stigma attached to seeking professional help.', 'Không nên có sự kỳ thị đối với việc tìm kiếm sự giúp đỡ chuyên môn.'],
      ],
      dialogue: [
        ['A', 'You look exhausted. Are you sleeping well?', 'Trông bạn kiệt sức. Bạn có ngủ ngon không?'],
        ['B', 'Not really. I have been working late every night, and I cannot switch off.', 'Không hẳn. Tôi làm việc muộn mỗi đêm và không thể ngừng suy nghĩ.'],
        ['A', 'That sounds like burnout. Have you tried meditation or some exercise?', 'Nghe giống kiệt sức đấy. Bạn đã thử thiền hay tập thể dục chưa?'],
        ['B', 'No, I never have time.', 'Chưa, tôi chẳng bao giờ có thời gian.'],
        ['A', 'Even a ten-minute walk every day can help you unwind.', 'Chỉ cần đi bộ mười phút mỗi ngày cũng giúp bạn xả hơi.'],
        ['B', 'You are right. I will start tomorrow.', 'Bạn nói đúng. Mai tôi sẽ bắt đầu.'],
      ],
    },
    {
      id: 'khoi-nghiep', title: 'Khởi nghiệp & kinh doanh nhỏ', icon: '🚀', level: 'B2',
      desc: 'Ý tưởng kinh doanh, vốn, kế hoạch, khách hàng, tiếp thị và quản lý doanh nghiệp nhỏ.',
      words: [
        ['entrepreneur', 'doanh nhân khởi nghiệp', 'She is a young entrepreneur.', 'Cô ấy là một doanh nhân trẻ.'],
        ['startup', 'công ty khởi nghiệp', 'He founded a technology startup.', 'Anh ấy sáng lập một công ty công nghệ khởi nghiệp.'],
        ['business idea', 'ý tưởng kinh doanh', 'She has a great business idea.', 'Cô ấy có một ý tưởng kinh doanh tuyệt vời.'],
        ['found', 'sáng lập', 'They founded the company in 2020.', 'Họ sáng lập công ty vào năm 2020.'],
        ['founder', 'người sáng lập', 'The founder still runs the company.', 'Người sáng lập vẫn điều hành công ty.'],
        ['set up', 'thành lập', 'It takes time to set up a business.', 'Thành lập doanh nghiệp cần thời gian.'],
        ['run', 'điều hành', 'She runs a small bakery.', 'Cô ấy điều hành một tiệm bánh nhỏ.'],
        ['small business', 'doanh nghiệp nhỏ', 'Small businesses create many jobs.', 'Doanh nghiệp nhỏ tạo nhiều việc làm.'],
        ['market research', 'nghiên cứu thị trường', 'Do market research before you start.', 'Hãy nghiên cứu thị trường trước khi bắt đầu.'],
        ['target market', 'thị trường mục tiêu', 'Our target market is young professionals.', 'Thị trường mục tiêu của chúng tôi là người trẻ đi làm.'],
        ['customer', 'khách hàng', 'Customers are the key to success.', 'Khách hàng là chìa khóa thành công.'],
        ['demand', 'nhu cầu', 'There is high demand for our products.', 'Nhu cầu về sản phẩm của chúng tôi rất cao.'],
        ['supply', 'nguồn cung', 'Supply cannot meet demand.', 'Nguồn cung không đáp ứng được nhu cầu.'],
        ['competitor', 'đối thủ cạnh tranh', 'Our competitors sell at lower prices.', 'Đối thủ của chúng tôi bán với giá thấp hơn.'],
        ['competition', 'sự cạnh tranh', 'The competition is very strong.', 'Sự cạnh tranh rất mạnh.'],
        ['niche', 'thị trường ngách', 'They found a niche in organic food.', 'Họ tìm được một thị trường ngách về thực phẩm hữu cơ.'],
        ['business plan', 'kế hoạch kinh doanh', 'You need a clear business plan.', 'Bạn cần một kế hoạch kinh doanh rõ ràng.'],
        ['capital', 'vốn', 'We need more capital to expand.', 'Chúng tôi cần thêm vốn để mở rộng.'],
        ['investor', 'nhà đầu tư', 'An investor offered us a hundred thousand dollars.', 'Một nhà đầu tư đề nghị chúng tôi một trăm nghìn đô la.'],
        ['funding', 'nguồn tài trợ', 'We are looking for funding.', 'Chúng tôi đang tìm nguồn tài trợ.'],
        ['loan', 'khoản vay', 'She took out a bank loan to open the shop.', 'Cô ấy vay ngân hàng để mở cửa hàng.'],
        ['budget', 'ngân sách', 'We have a tight budget.', 'Chúng tôi có ngân sách eo hẹp.'],
        ['cash flow', 'dòng tiền', 'Cash flow is a problem for new businesses.', 'Dòng tiền là vấn đề của doanh nghiệp mới.'],
        ['expenses', 'chi phí', 'Rent is our biggest expense.', 'Tiền thuê là chi phí lớn nhất của chúng tôi.'],
        ['revenue', 'doanh thu', 'Our revenue doubled this year.', 'Doanh thu của chúng tôi tăng gấp đôi năm nay.'],
        ['profit', 'lợi nhuận', 'We made a small profit in the first year.', 'Chúng tôi có chút lợi nhuận trong năm đầu.'],
        ['loss', 'khoản lỗ', 'The company made a loss last quarter.', 'Công ty bị lỗ vào quý trước.'],
        ['break even', 'hòa vốn', 'We hope to break even next year.', 'Chúng tôi hy vọng hòa vốn vào năm sau.'],
        ['pricing', 'định giá', 'Pricing is a difficult decision.', 'Định giá là một quyết định khó.'],
        ['product', 'sản phẩm', 'Our product is easy to use.', 'Sản phẩm của chúng tôi dễ sử dụng.'],
        ['prototype', 'bản mẫu', 'The prototype was ready in March.', 'Bản mẫu sẵn sàng vào tháng Ba.'],
        ['launch', 'ra mắt', 'We will launch the product in May.', 'Chúng tôi sẽ ra mắt sản phẩm vào tháng Năm.'],
        ['brand', 'thương hiệu', 'Building a brand takes years.', 'Xây dựng thương hiệu mất nhiều năm.'],
        ['logo', 'logo', 'We designed a simple logo.', 'Chúng tôi thiết kế một logo đơn giản.'],
        ['marketing', 'tiếp thị', 'Social media marketing is cheap and effective.', 'Tiếp thị qua mạng xã hội rẻ và hiệu quả.'],
        ['advertise', 'quảng cáo', 'We advertise on social media.', 'Chúng tôi quảng cáo trên mạng xã hội.'],
        ['promote', 'quảng bá', 'We promote the shop with discounts.', 'Chúng tôi quảng bá cửa hàng bằng giảm giá.'],
        ['word of mouth', 'truyền miệng', 'Word of mouth brings us new customers.', 'Truyền miệng mang đến cho chúng tôi khách hàng mới.'],
        ['online presence', 'sự hiện diện trực tuyến', 'A strong online presence is essential.', 'Sự hiện diện trực tuyến mạnh là điều thiết yếu.'],
        ['sales', 'doanh số', 'Sales rose by twenty percent.', 'Doanh số tăng hai mươi phần trăm.'],
        ['supplier', 'nhà cung cấp', 'We changed to a cheaper supplier.', 'Chúng tôi đổi sang nhà cung cấp rẻ hơn.'],
        ['staff', 'nhân viên', 'We employ ten members of staff.', 'Chúng tôi thuê mười nhân viên.'],
        ['employ', 'thuê (nhân viên)', 'The shop employs three people.', 'Cửa hàng thuê ba người.'],
        ['partner', 'đối tác, người cùng góp vốn', 'I started the business with a partner.', 'Tôi bắt đầu kinh doanh cùng một đối tác.'],
        ['risk', 'rủi ro', 'Starting a business involves risk.', 'Khởi nghiệp luôn có rủi ro.'],
        ['challenge', 'thách thức', 'Hiring good staff is a challenge.', 'Tuyển được nhân viên giỏi là một thách thức.'],
        ['expand', 'mở rộng', 'We plan to expand to other cities.', 'Chúng tôi dự định mở rộng ra các thành phố khác.'],
        ['grow', 'phát triển', 'The company has grown quickly.', 'Công ty đã phát triển nhanh chóng.'],
        ['succeed', 'thành công', 'Many startups fail before they succeed.', 'Nhiều công ty khởi nghiệp thất bại trước khi thành công.'],
        ['bankrupt', 'phá sản', 'The company went bankrupt in 2022.', 'Công ty phá sản vào năm 2022.'],
      ],
      patterns: [
        ['I am planning to set up a small business selling handmade products online.', 'Tôi đang dự định lập một doanh nghiệp nhỏ bán sản phẩm thủ công trực tuyến.'],
        ['Before you start, you should do some market research to understand your customers.', 'Trước khi bắt đầu, bạn nên nghiên cứu thị trường để hiểu khách hàng của mình.'],
        ['Most new businesses need capital to cover their first expenses.', 'Hầu hết doanh nghiệp mới cần vốn để trang trải các chi phí ban đầu.'],
        ['We hope to break even within two years.', 'Chúng tôi hy vọng hòa vốn trong vòng hai năm.'],
        ['Word of mouth is the most powerful form of advertising for a small shop.', 'Truyền miệng là hình thức quảng cáo mạnh nhất đối với một cửa hàng nhỏ.'],
      ],
      dialogue: [
        ['A', 'I am thinking of opening a small coffee shop.', 'Tôi đang nghĩ đến việc mở một quán cà phê nhỏ.'],
        ['B', 'That is a big step. Have you written a business plan?', 'Đó là bước đi lớn. Bạn đã viết kế hoạch kinh doanh chưa?'],
        ['A', 'Not yet. I am still doing market research and looking for a good location.', 'Chưa. Tôi vẫn đang nghiên cứu thị trường và tìm vị trí tốt.'],
        ['B', 'How will you pay for the start-up costs?', 'Bạn sẽ trả các chi phí khởi đầu thế nào?'],
        ['A', 'I have some savings, and I may ask the bank for a small loan.', 'Tôi có chút tiền tiết kiệm và có thể vay ngân hàng một khoản nhỏ.'],
        ['B', 'Good luck! I would love to be your first customer.', 'Chúc may mắn! Tôi rất muốn là khách hàng đầu tiên của bạn.'],
      ],
    },
  ],
  reads: {
    'nha-o-bat-dong-san': {
      title: 'Renting or Buying?',
      text: 'For many young people, deciding between renting and buying a home is one of the biggest financial choices they will make. Renting is flexible: tenants can move easily, and the landlord is responsible for major repairs. However, rent is money that you never get back, and it can increase every year. Buying a house gives you security and the possibility that the property will rise in value, but it requires a large down payment and a mortgage that may last twenty or thirty years. In large cities, house prices have risen faster than salaries, so affordable housing is becoming rare. Experts advise buyers to think about the location, the monthly costs of maintenance and the interest rate before they sign a contract. In the end, the best choice depends on your income, your plans and your tolerance for risk.',
      vi: 'Thuê hay mua nhà: thuê linh hoạt nhưng không tích lũy; mua an toàn, có thể tăng giá nhưng cần tiền trả trước và vay dài hạn; cần cân nhắc vị trí, chi phí và lãi suất.',
      qs: [
        ['What is an advantage of renting?', ['It is flexible.', 'You own the house.', 'There is no rent.', 'The price always falls.'], 0],
        ['What does buying a house require?', ['No money', 'A down payment and a mortgage', 'A landlord', 'A contract of one month'], 1],
        ['What should buyers consider before signing?', ['The color of the walls', 'Location, maintenance costs and interest rate', 'The neighbors\' cars', 'The weather forecast'], 1],
      ],
    },
    'quan-he-xa-giao': {
      title: 'The Art of Making Friends as an Adult',
      text: 'Making friends is easy at school because you see the same people every day. As adults, however, our lives become busy, and many friendships slowly drift apart. Psychologists say that strong friendships need three things: time, trust and shared experiences. Start by joining a club or a class where you can meet people with similar interests. Be a good listener, show empathy and ask questions about the other person. Small talk may seem unimportant, but it can break the ice and lead to deeper conversations. It also helps to keep in touch with a simple message from time to time. Of course, disagreements will happen. When they do, try to stay calm, apologize if you are wrong and look for a compromise. A true friend will value honesty more than perfection.',
      vi: 'Kết bạn khi trưởng thành cần thời gian, tin tưởng và trải nghiệm chung; tham gia câu lạc bộ, biết lắng nghe, giữ liên lạc và giải quyết bất đồng bằng thỏa hiệp.',
      qs: [
        ['What do strong friendships need?', ['Money, fame and luck', 'Time, trust and shared experiences', 'Silence and distance', 'Competition'], 1],
        ['How can you meet people with similar interests?', ['By joining a club or class', 'By staying at home', 'By avoiding small talk', 'By changing jobs every month'], 0],
        ['What should you do in a disagreement?', ['Stay calm and look for a compromise', 'Stop speaking forever', 'Blame others', 'Ignore the problem'], 0],
      ],
    },
    'suc-khoe-tinh-than': {
      title: 'Small Habits for a Healthier Mind',
      text: 'Mental health does not depend on big changes. Often, small daily habits make the greatest difference. Sleep is the first one: most adults need seven to eight hours, and a regular routine helps. Physical activity is another. A short walk can reduce stress and improve your mood, because exercise releases chemicals that make us feel better. A balanced diet, with fewer sugary snacks and enough water, also supports your brain. In the digital age, it is useful to limit your screen time, especially before bed, and to take regular breaks from your phone. Finally, do not underestimate the value of social connection. Talking to a friend or a counselor can lighten your worries. If you feel overwhelmed for a long time, seeking professional help is a sign of strength, not weakness.',
      vi: 'Thói quen nhỏ cải thiện sức khỏe tinh thần: ngủ đủ, vận động, ăn cân bằng, hạn chế màn hình, giữ kết nối xã hội và tìm giúp đỡ chuyên môn khi cần.',
      qs: [
        ['How many hours of sleep do most adults need?', ['Four to five', 'Seven to eight', 'Ten to twelve', 'Two to three'], 1],
        ['Why does exercise improve mood?', ['It releases chemicals that make us feel better.', 'It makes us tired.', 'It replaces food.', 'It is expensive.'], 0],
        ['What does the writer say about seeking professional help?', ['It is a sign of weakness.', 'It is a sign of strength.', 'It is unnecessary.', 'It is a waste of time.'], 1],
      ],
    },
    'khoi-nghiep': {
      title: 'Why Some Startups Fail',
      text: 'Every year, thousands of new companies are founded, but many of them close within five years. Research shows that the most common reason is that the business does not meet a real need. Entrepreneurs fall in love with their ideas and forget to ask whether customers will pay for them. Another problem is cash flow: even a company with strong sales can fail if it cannot pay its bills on time. Some founders also underestimate their competitors or set prices that are too low to make a profit. Finally, many startups grow too fast and hire staff before they have enough revenue. Successful entrepreneurs, in contrast, test their product with a small group of customers, listen to feedback and change their plans when necessary. They treat failure as a lesson, not as the end.',
      vi: 'Nhiều công ty khởi nghiệp thất bại vì không đáp ứng nhu cầu thật, thiếu dòng tiền, coi thường đối thủ, định giá thấp hoặc mở rộng quá nhanh; người thành công thử nghiệm và lắng nghe phản hồi.',
      qs: [
        ['What is the most common reason for failure?', ['The business does not meet a real need.', 'The office is too small.', 'The logo is ugly.', 'The founder is too old.'], 0],
        ['Why is cash flow important?', ['A company can fail if it cannot pay bills on time.', 'It decides the logo.', 'It attracts investors only.', 'It sets the staff holidays.'], 0],
        ['What do successful entrepreneurs do?', ['Ignore feedback', 'Test their product and listen to feedback', 'Hire many staff immediately', 'Avoid customers'], 1],
      ],
    },
  },
  defs: `
real estate = land and buildings
property = a building or land that someone owns
estate agent = a person who sells or rents buildings for others
landlord = a person who rents a building to others
tenant = a person who pays rent to use a building
lease = a legal agreement to rent a property
deposit = an amount of money paid at the start to secure something
utilities = services such as gas, water and electricity
furnished = containing furniture
unfurnished = not containing furniture
studio = a small apartment with one main room
detached house = a house that is not joined to another
semi-detached = joined to another house on one side
terraced house = one of a row of joined houses
high-rise = a very tall building
suburb = an area on the edge of a city
neighborhood = the area around where you live
location = the place where something is
convenient = easy to use or reach
spacious = having a lot of space
cramped = too small and crowded
modern = using the newest ideas and designs
renovate = to repair and improve an old building
renovation = the work of repairing and improving a building
maintenance = the work of keeping something in good condition
leak = a hole through which liquid escapes
damp = slightly wet
insulation = material that keeps heat or cold in a building
heating = a system that keeps a building warm
mortgage = a loan to buy a house
down payment = the first payment made when buying something
instalment = one of several regular payments
affordable = not too expensive
price = the amount of money you pay for something
value = how much something is worth
invest = to put money into something to make a profit
buyer = a person who buys something
seller = a person who sells something
viewing = a visit to look at a property
ownership = the fact of owning something
land = ground, especially a piece of property
planning permission = official approval to build or change a building
developer = a person or company that builds new buildings
construction = the process of building
eviction = the act of forcing someone to leave a home
homeless = having no home
overcrowded = containing too many people
housing shortage = not enough homes for the people who need them
relationship = the way people feel and behave toward each other
close friend = a friend you know very well
partner = a person you live with as a couple
social skills = the ability to communicate with others
small talk = polite conversation about unimportant things
break the ice = to make people feel more relaxed
get to know = to learn about someone
make friends = to start a friendship
keep in touch = to continue to communicate
lose touch = to stop communicating with someone
get along = to have a friendly relationship
have in common = to share interests or experiences
rely on = to depend on
loyal = faithful to someone
supportive = giving help and encouragement
considerate = thinking about the feelings of others
sympathetic = showing that you understand another person's suffering
empathy = the ability to share another person's feelings
good listener = a person who pays attention to others
tactful = careful not to upset people
diplomatic = skilled in dealing with people without upsetting them
compliment = a nice thing said about someone
criticism = a comment about what is wrong with something
advice = an opinion about what someone should do
forgive = to stop being angry with someone
misunderstanding = a failure to understand something correctly
argument = an angry disagreement
conflict = a serious disagreement
tension = a feeling of nervousness between people
compromise = an agreement in which both sides give up something
agree to disagree = to accept that you have different opinions
turn down = to refuse
politely = in a way that shows good manners
boundary = a limit that you set for others
privacy = the freedom to be alone and keep things secret
peer pressure = influence from people of your own age
reputation = the opinion people have about someone
networking = meeting people to make useful contacts
mutual = shared by two or more people
etiquette = rules of polite behavior
manners = polite behavior
gossip = talk about other people's private lives
reconcile = to become friends again after a quarrel
drift apart = to slowly become less close
bond = a connection between people
mental health = the condition of your mind and emotions
well-being = the state of being healthy and happy
anxiety = a feeling of worry and fear
depression = a medical condition of very deep sadness
burnout = extreme tiredness from working too much
pressure = the feeling of having to do something
overwhelmed = having too much to deal with
worry = to feel anxious about something
mood swings = quick changes in feelings
insomnia = being unable to sleep
sleep = the natural rest of the body
routine = the usual way you do things
relax = to rest and feel calm
relaxation = the state of being calm
meditation = quiet thinking to calm the mind
mindfulness = paying attention to the present moment
breathe = to take air into the lungs and send it out
workout = a period of physical exercise
fitness = being physically healthy and strong
balanced diet = eating the right kinds and amounts of food
junk food = food that is quick to eat but not healthy
hydration = having enough water in the body
caffeine = a substance in coffee that makes you more awake
addiction = being unable to stop doing something
digital detox = a period without electronic devices
work-life balance = the right amount of time for work and personal life
support network = people who help you in difficult times
therapy = treatment for a mental or physical problem
therapist = a person trained to give therapy
counselor = a person who gives advice about personal problems
seek help = to ask for assistance
stigma = a feeling that something is shameful
cope = to deal successfully with a difficult situation
resilience = the ability to recover quickly from difficulties
self-esteem = confidence in your own value
self-care = looking after your own health and happiness
positive thinking = focusing on good things
journal = a daily written record of your thoughts
cut down on = to reduce the amount of something
take a break = to stop working for a short time
unwind = to relax after a period of work
recharge = to get your energy back
healthy habit = a good routine for your health
entrepreneur = a person who starts a business
startup = a new company
business idea = a plan for a new product or service
found = to start an organization
founder = a person who starts an organization
run = to manage a business
small business = a company with few employees
market research = collecting information about customers and competitors
target market = the group of customers a business wants to reach
demand = the desire of customers to buy a product
supply = the amount of something available
competition = a situation where companies try to win customers
niche = a small, specialized part of a market
business plan = a document describing a business's goals
capital = money used to start or run a business
investor = a person who puts money into a business
funding = money provided for a project
budget = a plan for how to spend money
cash flow = the movement of money in and out of a business
expenses = money spent on running a business
loss = money lost when costs are higher than income
break even = to earn exactly as much as you spend
pricing = deciding how much to charge
prototype = the first model of a product
launch = to introduce a new product
logo = a symbol that represents a company
marketing = activities to promote and sell a product
advertise = to tell the public about a product
promote = to encourage people to buy or support something
word of mouth = information passed on by people talking
online presence = the way a business appears on the internet
sales = the number of items sold
staff = the people who work for a company
employ = to give someone a job
risk = a chance that something bad will happen
expand = to become larger
grow = to become bigger or more successful
bankrupt = unable to pay debts

## ghi đè theo chủ đề
nha-o-bat-dong-san|rent = the money you pay regularly to use a home
nha-o-bat-dong-san|repair = work done to fix something broken
nha-o-bat-dong-san|contract = a written agreement
nha-o-bat-dong-san|price = the amount of money you pay for something
khoi-nghiep|partner = a person who shares ownership of a business
khoi-nghiep|set up = to start a business
khoi-nghiep|profit = the money you gain when income is higher than costs
khoi-nghiep|product = something made to be sold
suc-khoe-tinh-than|stress = a feeling of worry caused by difficult problems
suc-khoe-tinh-than|exercise = physical activity to keep healthy
suc-khoe-tinh-than|hobby = an activity you enjoy in your free time
quan-he-xa-giao|introduce = to tell people each other's names when they first meet
quan-he-xa-giao|resolve = to find a solution to a problem
suc-khoe-tinh-than|nutrition = the food needed for growth and health
nha-o-bat-dong-san|deposit = money paid at the start of a rental to protect the owner
quan-he-xa-giao|argument = an angry disagreement between people
suc-khoe-tinh-than|journal = a daily written record of your thoughts
`,
};
