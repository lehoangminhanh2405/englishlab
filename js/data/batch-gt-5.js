// Đợt 5 chủ đề giao tiếp (B2): quảng cáo & tiêu dùng, du học & học trực tuyến, văn hóa công sở, thành phố & nông thôn.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'quang-cao-tieu-dung', title: 'Quảng cáo & người tiêu dùng', icon: '🛒', level: 'B2',
      desc: 'Quảng cáo, thương hiệu, hành vi mua sắm, quyền người tiêu dùng và tiêu dùng có trách nhiệm.',
      words: [
        ['consumer', 'người tiêu dùng', 'Consumers expect fast delivery.', 'Người tiêu dùng mong muốn giao hàng nhanh.'],
        ['consumption', 'sự tiêu dùng', 'Energy consumption is rising.', 'Mức tiêu thụ năng lượng đang tăng.'],
        ['consumerism', 'chủ nghĩa tiêu dùng', 'Consumerism encourages people to buy more.', 'Chủ nghĩa tiêu dùng khuyến khích người ta mua nhiều hơn.'],
        ['advertising', 'ngành quảng cáo', 'Advertising shapes our opinions.', 'Quảng cáo định hình quan điểm của chúng ta.'],
        ['campaign', 'chiến dịch', 'The company launched a new campaign.', 'Công ty phát động một chiến dịch mới.'],
        ['slogan', 'khẩu hiệu', 'The slogan is short and memorable.', 'Khẩu hiệu ngắn và dễ nhớ.'],
        ['catchy', 'bắt tai, dễ nhớ', 'The jingle is very catchy.', 'Đoạn nhạc quảng cáo rất bắt tai.'],
        ['billboard', 'bảng quảng cáo lớn', 'A huge billboard stands next to the road.', 'Một bảng quảng cáo khổng lồ dựng cạnh đường.'],
        ['commercial', 'quảng cáo truyền hình', 'I skip commercials when I watch TV.', 'Tôi bỏ qua quảng cáo khi xem tivi.'],
        ['endorsement', 'sự chứng thực (của người nổi tiếng)', 'Celebrity endorsement increases sales.', 'Sự chứng thực của người nổi tiếng làm tăng doanh số.'],
        ['influencer', 'người có tầm ảnh hưởng', 'Influencers promote products on social media.', 'Người có tầm ảnh hưởng quảng bá sản phẩm trên mạng xã hội.'],
        ['sponsor', 'nhà tài trợ', 'A sports brand sponsors the team.', 'Một thương hiệu thể thao tài trợ cho đội.'],
        ['brand loyalty', 'sự trung thành với thương hiệu', 'Brand loyalty keeps customers coming back.', 'Sự trung thành với thương hiệu khiến khách hàng quay lại.'],
        ['brand image', 'hình ảnh thương hiệu', 'The company wants to improve its brand image.', 'Công ty muốn cải thiện hình ảnh thương hiệu.'],
        ['reputation', 'danh tiếng', 'A good reputation takes years to build.', 'Danh tiếng tốt mất nhiều năm để xây dựng.'],
        ['target audience', 'đối tượng mục tiêu', 'The ad targets teenagers.', 'Quảng cáo nhắm đến thanh thiếu niên.'],
        ['persuade', 'thuyết phục', 'Ads try to persuade us to buy.', 'Quảng cáo cố thuyết phục chúng ta mua hàng.'],
        ['influence', 'ảnh hưởng', 'Advertising influences young people.', 'Quảng cáo ảnh hưởng đến người trẻ.'],
        ['appeal', 'sức hấp dẫn', 'The product has wide appeal.', 'Sản phẩm có sức hấp dẫn rộng.'],
        ['emotional', 'mang tính cảm xúc', 'Many ads use an emotional message.', 'Nhiều quảng cáo dùng thông điệp cảm xúc.'],
        ['misleading', 'gây hiểu lầm', 'The advertisement was misleading.', 'Quảng cáo đó gây hiểu lầm.'],
        ['exaggerate', 'phóng đại', 'Some ads exaggerate the benefits.', 'Một số quảng cáo phóng đại lợi ích.'],
        ['false claim', 'tuyên bố sai sự thật', 'The firm was fined for a false claim.', 'Công ty bị phạt vì tuyên bố sai sự thật.'],
        ['regulation', 'quy định', 'There are strict regulations on advertising.', 'Có các quy định nghiêm ngặt về quảng cáo.'],
        ['consumer rights', 'quyền của người tiêu dùng', 'Consumer rights protect buyers.', 'Quyền của người tiêu dùng bảo vệ người mua.'],
        ['guarantee', 'sự bảo đảm', 'The product comes with a two-year guarantee.', 'Sản phẩm có bảo đảm hai năm.'],
        ['warranty', 'bảo hành', 'The warranty covers repairs.', 'Bảo hành bao gồm sửa chữa.'],
        ['label', 'nhãn mác', 'Always read the label carefully.', 'Luôn đọc kỹ nhãn mác.'],
        ['packaging', 'bao bì', 'Excess packaging creates waste.', 'Bao bì thừa tạo ra rác.'],
        ['ingredient', 'thành phần', 'The ingredients are listed on the back.', 'Thành phần được ghi ở mặt sau.'],
        ['organic', 'hữu cơ', 'Organic food is more expensive.', 'Thực phẩm hữu cơ đắt hơn.'],
        ['bargain', 'món hời', 'I found a real bargain in the sale.', 'Tôi tìm được món hời thật sự trong đợt giảm giá.'],
        ['discount', 'giảm giá', 'Shops offer big discounts in January.', 'Các cửa hàng giảm giá lớn vào tháng Một.'],
        ['loyalty card', 'thẻ khách hàng thân thiết', 'I collect points with my loyalty card.', 'Tôi tích điểm bằng thẻ khách hàng thân thiết.'],
        ['special offer', 'ưu đãi đặc biệt', 'The special offer ends on Sunday.', 'Ưu đãi đặc biệt kết thúc vào Chủ nhật.'],
        ['impulse', 'sự bốc đồng', 'I bought it on impulse.', 'Tôi mua nó theo cảm hứng bốc đồng.'],
        ['impulse buying', 'mua sắm bốc đồng', 'Impulse buying is encouraged by sales.', 'Mua sắm bốc đồng được khuyến khích bởi các đợt giảm giá.'],
        ['status symbol', 'biểu tượng địa vị', 'Luxury cars are a status symbol.', 'Xe sang là biểu tượng địa vị.'],
        ['luxury', 'hàng xa xỉ', 'She spends a lot of money on luxury goods.', 'Cô ấy chi nhiều tiền cho hàng xa xỉ.'],
        ['necessity', 'nhu yếu phẩm', 'Food and water are basic necessities.', 'Thức ăn và nước là nhu yếu phẩm cơ bản.'],
        ['disposable', 'dùng một lần', 'Disposable products harm the environment.', 'Sản phẩm dùng một lần gây hại cho môi trường.'],
        ['durable', 'bền', 'This bag is cheap but not durable.', 'Chiếc túi này rẻ nhưng không bền.'],
        ['second-hand', 'đã qua sử dụng', 'I buy second-hand clothes to save money.', 'Tôi mua quần áo đã qua sử dụng để tiết kiệm.'],
        ['fast fashion', 'thời trang nhanh', 'Fast fashion creates a lot of waste.', 'Thời trang nhanh tạo ra nhiều rác thải.'],
        ['sustainable', 'bền vững', 'More people choose sustainable products.', 'Nhiều người chọn sản phẩm bền vững.'],
        ['ethical', 'có đạo đức', 'Ethical brands treat workers fairly.', 'Các thương hiệu có đạo đức đối xử công bằng với công nhân.'],
        ['boycott', 'tẩy chay', 'People boycotted the company.', 'Mọi người tẩy chay công ty đó.'],
        ['review', 'bài đánh giá', 'Customer reviews influence buyers.', 'Đánh giá của khách hàng ảnh hưởng đến người mua.'],
        ['recommendation', 'lời giới thiệu', 'I bought it on a friend\'s recommendation.', 'Tôi mua nó theo lời giới thiệu của một người bạn.'],
        ['spending', 'chi tiêu', 'Household spending has increased.', 'Chi tiêu của các hộ gia đình đã tăng.'],
        ['afford', 'đủ khả năng', 'Not everyone can afford luxury goods.', 'Không phải ai cũng đủ khả năng mua hàng xa xỉ.'],
        ['overpriced', 'đắt quá mức', 'This coffee is overpriced.', 'Cà phê này đắt quá mức.'],
      ],
      patterns: [
        ['Advertising can strongly influence what we choose to buy.', 'Quảng cáo có thể ảnh hưởng mạnh đến những gì chúng ta chọn mua.'],
        ['Many consumers are now more aware of the environmental impact of their purchases.', 'Nhiều người tiêu dùng giờ đây ý thức hơn về tác động môi trường của việc mua sắm.'],
        ['I always compare prices and read customer reviews before I buy something.', 'Tôi luôn so sánh giá và đọc đánh giá khách hàng trước khi mua gì đó.'],
        ['The advertisement was misleading because the product did not work as promised.', 'Quảng cáo đó gây hiểu lầm vì sản phẩm không hoạt động như đã hứa.'],
        ['Consumers have the right to return faulty goods.', 'Người tiêu dùng có quyền trả lại hàng lỗi.'],
      ],
      dialogue: [
        ['A', 'Why do you always buy the same brand?', 'Sao bạn lúc nào cũng mua cùng một thương hiệu?'],
        ['B', 'I trust it. The quality is consistent, and the warranty is good.', 'Tôi tin nó. Chất lượng ổn định và bảo hành tốt.'],
        ['A', 'But it is more expensive than other brands.', 'Nhưng nó đắt hơn các thương hiệu khác.'],
        ['B', 'True, but cheaper products are often not durable.', 'Đúng, nhưng sản phẩm rẻ hơn thường không bền.'],
        ['A', 'I suppose advertising also influences my choices.', 'Mình đoán quảng cáo cũng ảnh hưởng đến lựa chọn của mình.'],
        ['B', 'Probably. That is why I always read reviews first.', 'Có lẽ vậy. Vì thế tôi luôn đọc đánh giá trước.'],
      ],
    },
    {
      id: 'du-hoc-hoc-truc-tuyen', title: 'Du học & học trực tuyến', icon: '🎓', level: 'B2',
      desc: 'Chọn trường, học bổng, visa, cuộc sống du học và học từ xa.',
      words: [
        ['study abroad', 'du học', 'She plans to study abroad next year.', 'Cô ấy dự định đi du học vào năm sau.'],
        ['international student', 'sinh viên quốc tế', 'International students pay higher fees.', 'Sinh viên quốc tế đóng học phí cao hơn.'],
        ['overseas', 'ở nước ngoài', 'He studied overseas for four years.', 'Anh ấy học ở nước ngoài bốn năm.'],
        ['admission', 'sự nhập học', 'Admission requires an English certificate.', 'Nhập học yêu cầu chứng chỉ tiếng Anh.'],
        ['entry requirements', 'điều kiện đầu vào', 'Check the entry requirements carefully.', 'Hãy kiểm tra kỹ điều kiện đầu vào.'],
        ['application', 'hồ sơ ứng tuyển', 'The application deadline is in March.', 'Hạn nộp hồ sơ là vào tháng Ba.'],
        ['personal statement', 'bài luận cá nhân', 'Write a strong personal statement.', 'Hãy viết một bài luận cá nhân thuyết phục.'],
        ['reference letter', 'thư giới thiệu', 'I asked my professor for a reference letter.', 'Tôi nhờ giáo sư viết thư giới thiệu.'],
        ['transcript', 'bảng điểm', 'Please send your official transcript.', 'Vui lòng gửi bảng điểm chính thức.'],
        ['IELTS', 'chứng chỉ IELTS', 'You need an IELTS score of 6.5.', 'Bạn cần điểm IELTS 6,5.'],
        ['scholarship', 'học bổng', 'She won a full scholarship.', 'Cô ấy giành học bổng toàn phần.'],
        ['tuition fees', 'học phí', 'Tuition fees are very high.', 'Học phí rất cao.'],
        ['living costs', 'chi phí sinh hoạt', 'Living costs are lower in smaller cities.', 'Chi phí sinh hoạt thấp hơn ở các thành phố nhỏ.'],
        ['accommodation', 'chỗ ở', 'The university helps with accommodation.', 'Trường hỗ trợ chỗ ở.'],
        ['halls of residence', 'ký túc xá', 'First-year students live in halls of residence.', 'Sinh viên năm nhất ở ký túc xá.'],
        ['visa', 'thị thực', 'The student visa takes four weeks.', 'Visa du học mất bốn tuần.'],
        ['embassy', 'đại sứ quán', 'Apply for your visa at the embassy.', 'Nộp đơn xin visa tại đại sứ quán.'],
        ['orientation', 'buổi định hướng', 'Orientation week helps new students settle in.', 'Tuần định hướng giúp sinh viên mới làm quen.'],
        ['campus', 'khuôn viên trường', 'The campus has a large library.', 'Khuôn viên trường có một thư viện lớn.'],
        ['lecture', 'bài giảng', 'I attend three lectures a day.', 'Tôi dự ba bài giảng mỗi ngày.'],
        ['seminar', 'buổi thảo luận chuyên đề', 'We discuss readings in the seminar.', 'Chúng tôi thảo luận tài liệu đọc trong buổi chuyên đề.'],
        ['tutorial', 'buổi hướng dẫn nhóm nhỏ', 'The tutorial is led by a teaching assistant.', 'Buổi hướng dẫn do một trợ giảng dẫn dắt.'],
        ['assignment', 'bài tập lớn', 'I must submit an assignment every week.', 'Tuần nào tôi cũng phải nộp một bài tập lớn.'],
        ['essay', 'bài luận', 'The essay should be 2,500 words long.', 'Bài luận dài khoảng 2.500 từ.'],
        ['plagiarism', 'đạo văn', 'Plagiarism is a serious offence.', 'Đạo văn là một lỗi nghiêm trọng.'],
        ['supervisor', 'người hướng dẫn', 'My supervisor gives me useful feedback.', 'Người hướng dẫn cho tôi phản hồi hữu ích.'],
        ['dissertation', 'luận văn', 'I am writing my dissertation.', 'Tôi đang viết luận văn.'],
        ['module', 'học phần', 'I chose a module on marketing.', 'Tôi chọn một học phần về tiếp thị.'],
        ['credit', 'tín chỉ', 'Each course is worth three credits.', 'Mỗi khóa có giá trị ba tín chỉ.'],
        ['culture shock', 'cú sốc văn hóa', 'I experienced culture shock at first.', 'Lúc đầu tôi bị cú sốc văn hóa.'],
        ['homesick', 'nhớ nhà', 'She felt homesick in the first month.', 'Cô ấy nhớ nhà trong tháng đầu.'],
        ['adapt', 'thích nghi', 'It took me a while to adapt to the climate.', 'Tôi mất một thời gian để thích nghi với khí hậu.'],
        ['settle in', 'ổn định cuộc sống', 'It took two weeks to settle in.', 'Mất hai tuần để ổn định cuộc sống.'],
        ['part-time job', 'việc làm thêm', 'Many students have a part-time job.', 'Nhiều sinh viên có việc làm thêm.'],
        ['networking', 'xây dựng quan hệ', 'Networking helps you find internships.', 'Xây dựng quan hệ giúp bạn tìm được thực tập.'],
        ['alumni', 'cựu sinh viên', 'The alumni network is very strong.', 'Mạng lưới cựu sinh viên rất mạnh.'],
        ['graduate', 'tốt nghiệp', 'She will graduate in June.', 'Cô ấy sẽ tốt nghiệp vào tháng Sáu.'],
        ['online course', 'khóa học trực tuyến', 'I completed an online course in data analysis.', 'Tôi hoàn thành một khóa trực tuyến về phân tích dữ liệu.'],
        ['distance learning', 'học từ xa', 'Distance learning offers flexibility.', 'Học từ xa mang lại sự linh hoạt.'],
        ['e-learning', 'học trực tuyến', 'E-learning has grown rapidly.', 'Học trực tuyến đã phát triển nhanh chóng.'],
        ['platform', 'nền tảng', 'The course runs on a popular platform.', 'Khóa học chạy trên một nền tảng phổ biến.'],
        ['virtual classroom', 'lớp học ảo', 'We meet in a virtual classroom twice a week.', 'Chúng tôi gặp nhau ở lớp học ảo hai lần một tuần.'],
        ['webinar', 'hội thảo trực tuyến', 'I joined a free webinar.', 'Tôi tham gia một hội thảo trực tuyến miễn phí.'],
        ['self-paced', 'tự điều chỉnh tiến độ', 'The course is self-paced.', 'Khóa học tự điều chỉnh tiến độ.'],
        ['deadline', 'hạn nộp', 'Online students must keep to deadlines.', 'Sinh viên trực tuyến phải đúng hạn nộp.'],
        ['self-discipline', 'tính tự kỷ luật', 'Online study requires self-discipline.', 'Học trực tuyến đòi hỏi tính tự kỷ luật.'],
        ['certificate', 'chứng chỉ', 'You receive a certificate at the end.', 'Bạn nhận chứng chỉ vào cuối khóa.'],
        ['accredited', 'được công nhận', 'Choose an accredited university.', 'Hãy chọn một trường đại học được công nhận.'],
        ['qualification', 'bằng cấp', 'A foreign qualification improves your job prospects.', 'Bằng cấp nước ngoài cải thiện triển vọng việc làm.'],
        ['career prospects', 'triển vọng nghề nghiệp', 'Good career prospects attract students.', 'Triển vọng nghề nghiệp tốt thu hút sinh viên.'],
        ['broaden', 'mở rộng', 'Studying abroad broadens your horizons.', 'Du học mở rộng tầm nhìn của bạn.'],
      ],
      patterns: [
        ['I would like to apply for a scholarship to study a master\'s degree in the UK.', 'Tôi muốn xin học bổng để học thạc sĩ ở Anh.'],
        ['The application deadline is in March, and I still need to write my personal statement.', 'Hạn nộp hồ sơ là tháng Ba và tôi vẫn cần viết bài luận cá nhân.'],
        ['Living abroad has helped me become more independent and open-minded.', 'Sống ở nước ngoài giúp tôi tự lập và cởi mở hơn.'],
        ['Online courses offer flexibility, but they require a lot of self-discipline.', 'Các khóa học trực tuyến linh hoạt nhưng đòi hỏi nhiều tính tự kỷ luật.'],
        ['I found it difficult to adapt to a new culture at first.', 'Lúc đầu tôi thấy khó thích nghi với một nền văn hóa mới.'],
      ],
      dialogue: [
        ['A', 'Are you really going to study abroad next year?', 'Bạn thật sự sẽ đi du học vào năm sau à?'],
        ['B', 'Yes, I got a place on a master\'s program in Australia.', 'Ừ, mình đã được nhận vào chương trình thạc sĩ ở Úc.'],
        ['A', 'That is great! Did you get a scholarship?', 'Tuyệt quá! Bạn có học bổng không?'],
        ['B', 'A partial one. It covers half of the tuition fees.', 'Một phần thôi. Nó chi trả một nửa học phí.'],
        ['A', 'Are you worried about living there?', 'Bạn có lo về việc sống ở đó không?'],
        ['B', 'A little. I might feel homesick, but I am looking forward to the experience.', 'Một chút. Mình có thể nhớ nhà, nhưng mình rất mong chờ trải nghiệm này.'],
      ],
    },
    {
      id: 'van-hoa-cong-so', title: 'Văn hóa công sở & làm việc từ xa', icon: '🖥️', level: 'B2',
      desc: 'Họp, email, làm việc nhóm, làm từ xa, phản hồi và phát triển nghề nghiệp.',
      words: [
        ['workplace', 'nơi làm việc', 'A positive workplace improves productivity.', 'Một nơi làm việc tích cực nâng cao năng suất.'],
        ['company culture', 'văn hóa công ty', 'The company culture is open and friendly.', 'Văn hóa công ty cởi mở và thân thiện.'],
        ['remote work', 'làm việc từ xa', 'Remote work saves commuting time.', 'Làm việc từ xa tiết kiệm thời gian đi lại.'],
        ['work from home', 'làm việc tại nhà', 'We work from home on Fridays.', 'Chúng tôi làm việc tại nhà vào thứ Sáu.'],
        ['hybrid', 'kết hợp (nhà và văn phòng)', 'We follow a hybrid schedule.', 'Chúng tôi theo lịch làm việc kết hợp.'],
        ['flexible hours', 'giờ làm linh hoạt', 'Flexible hours help parents.', 'Giờ làm linh hoạt giúp các bậc cha mẹ.'],
        ['commute', 'đi làm hằng ngày', 'My commute is only ten minutes.', 'Quãng đường đi làm của tôi chỉ mười phút.'],
        ['open-plan', 'văn phòng không vách ngăn', 'The open-plan office is noisy.', 'Văn phòng không vách ngăn khá ồn.'],
        ['meeting', 'cuộc họp', 'The meeting lasted two hours.', 'Cuộc họp kéo dài hai giờ.'],
        ['agenda', 'chương trình họp', 'Please send the agenda in advance.', 'Vui lòng gửi chương trình họp trước.'],
        ['minutes', 'biên bản họp', 'Who is taking the minutes?', 'Ai ghi biên bản họp vậy?'],
        ['chair', 'chủ trì', 'The manager will chair the meeting.', 'Quản lý sẽ chủ trì cuộc họp.'],
        ['attend', 'tham dự', 'All staff must attend the training.', 'Mọi nhân viên phải tham dự buổi đào tạo.'],
        ['brainstorm', 'động não', 'We brainstormed ideas for the campaign.', 'Chúng tôi động não ý tưởng cho chiến dịch.'],
        ['action point', 'đầu việc cần làm', 'We listed the action points at the end.', 'Chúng tôi liệt kê các đầu việc cần làm ở cuối buổi.'],
        ['deadline', 'hạn chót', 'We have a tight deadline.', 'Chúng tôi có hạn chót gấp.'],
        ['workload', 'khối lượng công việc', 'My workload has doubled.', 'Khối lượng công việc của tôi tăng gấp đôi.'],
        ['prioritize', 'ưu tiên', 'You need to prioritize your tasks.', 'Bạn cần ưu tiên các nhiệm vụ của mình.'],
        ['delegate', 'giao việc', 'A good manager knows how to delegate.', 'Quản lý giỏi biết cách giao việc.'],
        ['responsibility', 'trách nhiệm', 'She takes responsibility for the project.', 'Cô ấy chịu trách nhiệm về dự án.'],
        ['teamwork', 'làm việc nhóm', 'Good teamwork leads to better results.', 'Làm việc nhóm tốt dẫn đến kết quả tốt hơn.'],
        ['collaborate', 'hợp tác', 'We collaborate with the design team.', 'Chúng tôi hợp tác với nhóm thiết kế.'],
        ['communication', 'giao tiếp', 'Clear communication prevents mistakes.', 'Giao tiếp rõ ràng ngăn ngừa sai sót.'],
        ['email', 'thư điện tử', 'I answer emails in the morning.', 'Tôi trả lời email vào buổi sáng.'],
        ['reply', 'trả lời', 'Please reply to me by Friday.', 'Vui lòng trả lời tôi trước thứ Sáu.'],
        ['forward', 'chuyển tiếp', 'I will forward the email to you.', 'Tôi sẽ chuyển tiếp email cho bạn.'],
        ['attachment', 'tệp đính kèm', 'Please open the attachment.', 'Vui lòng mở tệp đính kèm.'],
        ['cc', 'gửi bản sao', 'Please cc your manager on the email.', 'Vui lòng gửi bản sao email cho quản lý.'],
        ['video call', 'cuộc gọi video', 'We have a video call every Monday.', 'Chúng tôi họp qua video vào mỗi thứ Hai.'],
        ['online meeting', 'cuộc họp trực tuyến', 'The online meeting starts at ten.', 'Cuộc họp trực tuyến bắt đầu lúc mười giờ.'],
        ['mute', 'tắt tiếng', 'Please mute your microphone.', 'Vui lòng tắt micro của bạn.'],
        ['screen sharing', 'chia sẻ màn hình', 'I will start screen sharing now.', 'Tôi sẽ bắt đầu chia sẻ màn hình ngay.'],
        ['time zone', 'múi giờ', 'The time zone difference makes meetings hard.', 'Chênh lệch múi giờ làm các cuộc họp khó khăn.'],
        ['productivity', 'năng suất', 'Productivity rose after the change.', 'Năng suất tăng sau thay đổi.'],
        ['distraction', 'sự xao nhãng', 'Notifications are a big distraction.', 'Thông báo là sự xao nhãng lớn.'],
        ['focus', 'tập trung', 'I need quiet to focus.', 'Tôi cần yên tĩnh để tập trung.'],
        ['work-life balance', 'cân bằng công việc và cuộc sống', 'Remote work can improve work-life balance.', 'Làm việc từ xa có thể cải thiện sự cân bằng công việc và cuộc sống.'],
        ['overtime', 'làm thêm giờ', 'Overtime is paid at a higher rate.', 'Làm thêm giờ được trả với mức cao hơn.'],
        ['burnout', 'kiệt sức', 'Long hours may cause burnout.', 'Làm nhiều giờ có thể gây kiệt sức.'],
        ['feedback', 'phản hồi', 'I appreciate honest feedback.', 'Tôi trân trọng phản hồi trung thực.'],
        ['performance review', 'đánh giá hiệu suất', 'My performance review is next week.', 'Buổi đánh giá hiệu suất của tôi diễn ra tuần sau.'],
        ['appraisal', 'sự đánh giá', 'The annual appraisal decides the bonus.', 'Đánh giá hằng năm quyết định tiền thưởng.'],
        ['constructive', 'mang tính xây dựng', 'She gave me constructive criticism.', 'Cô ấy góp ý mang tính xây dựng cho tôi.'],
        ['promotion', 'thăng chức', 'He hopes for a promotion this year.', 'Anh ấy hy vọng được thăng chức trong năm nay.'],
        ['training', 'đào tạo', 'The company offers free training.', 'Công ty cung cấp đào tạo miễn phí.'],
        ['mentor', 'người hướng dẫn', 'My mentor taught me a lot.', 'Người hướng dẫn đã dạy tôi nhiều điều.'],
        ['career path', 'lộ trình nghề nghiệp', 'We discussed my career path.', 'Chúng tôi trao đổi về lộ trình nghề nghiệp của tôi.'],
        ['colleague', 'đồng nghiệp', 'My colleagues are supportive.', 'Các đồng nghiệp của tôi rất ủng hộ.'],
        ['office politics', 'chính trị công sở', 'I avoid office politics.', 'Tôi tránh chính trị công sở.'],
        ['bullying', 'sự bắt nạt', 'Bullying at work is not acceptable.', 'Bắt nạt ở nơi làm việc là không chấp nhận được.'],
        ['harassment', 'sự quấy rối', 'The company has a policy against harassment.', 'Công ty có chính sách chống quấy rối.'],
      ],
      patterns: [
        ['Could everyone please send me their updates before the meeting?', 'Mọi người vui lòng gửi cho tôi cập nhật của mình trước cuộc họp nhé?'],
        ['I am afraid I will not be able to attend tomorrow\'s meeting.', 'Tôi e là mình không thể tham dự cuộc họp ngày mai.'],
        ['Working from home gives me more flexibility, but I sometimes miss the team.', 'Làm việc tại nhà cho tôi nhiều linh hoạt hơn, nhưng đôi khi tôi nhớ nhóm.'],
        ['I would appreciate your feedback on my presentation.', 'Tôi rất mong nhận được phản hồi của bạn về bài thuyết trình.'],
        ['Let us go through the agenda and then decide on the next steps.', 'Chúng ta xem qua chương trình họp rồi quyết định các bước tiếp theo.'],
      ],
      dialogue: [
        ['A', 'Do you prefer working from home or in the office?', 'Bạn thích làm việc tại nhà hay ở văn phòng hơn?'],
        ['B', 'A mix of both. At home I can focus better, but in the office it is easier to collaborate.', 'Kết hợp cả hai. Ở nhà tôi tập trung hơn, nhưng ở văn phòng dễ hợp tác hơn.'],
        ['A', 'Our company has a hybrid policy now. We work from home three days a week.', 'Công ty chúng tôi giờ có chính sách kết hợp. Chúng tôi làm tại nhà ba ngày mỗi tuần.'],
        ['B', 'That sounds ideal. What about video calls?', 'Nghe lý tưởng đấy. Còn các cuộc họp video thì sao?'],
        ['A', 'We have one every morning. It is short, just to share our priorities.', 'Chúng tôi họp mỗi sáng. Ngắn thôi, chỉ để chia sẻ các ưu tiên.'],
        ['B', 'I like that. It keeps everyone in the loop.', 'Tôi thích vậy. Nó giúp mọi người nắm được thông tin.'],
      ],
    },
    {
      id: 'thanh-pho-nong-thon', title: 'Thành phố & nông thôn', icon: '🏙️', level: 'B2',
      desc: 'So sánh cuộc sống đô thị và nông thôn, đô thị hóa, giao thông, môi trường và cộng đồng.',
      words: [
        ['urban', 'thuộc đô thị', 'Urban areas are growing quickly.', 'Các khu đô thị đang phát triển nhanh.'],
        ['rural', 'thuộc nông thôn', 'Rural life is quieter.', 'Cuộc sống nông thôn yên tĩnh hơn.'],
        ['city life', 'cuộc sống thành thị', 'City life is fast and busy.', 'Cuộc sống thành thị nhanh và bận rộn.'],
        ['village', 'ngôi làng', 'She grew up in a small village.', 'Cô ấy lớn lên ở một ngôi làng nhỏ.'],
        ['town', 'thị trấn', 'The town has about ten thousand people.', 'Thị trấn có khoảng mười nghìn dân.'],
        ['metropolis', 'đô thị lớn', 'Ho Chi Minh City is a busy metropolis.', 'Thành phố Hồ Chí Minh là một đô thị lớn nhộn nhịp.'],
        ['population', 'dân số', 'The population has doubled.', 'Dân số đã tăng gấp đôi.'],
        ['density', 'mật độ', 'Population density is very high.', 'Mật độ dân số rất cao.'],
        ['urbanization', 'đô thị hóa', 'Rapid urbanization creates many problems.', 'Đô thị hóa nhanh tạo ra nhiều vấn đề.'],
        ['migrate', 'di cư', 'Many people migrate to the cities for work.', 'Nhiều người di cư lên thành phố để làm việc.'],
        ['migration', 'sự di cư', 'Rural-urban migration is increasing.', 'Sự di cư từ nông thôn ra thành thị đang tăng.'],
        ['resident', 'cư dân', 'Local residents complained about the noise.', 'Cư dân địa phương phàn nàn về tiếng ồn.'],
        ['infrastructure', 'cơ sở hạ tầng', 'The city is investing in infrastructure.', 'Thành phố đang đầu tư vào cơ sở hạ tầng.'],
        ['public transport', 'phương tiện công cộng', 'Public transport is well developed.', 'Phương tiện công cộng phát triển tốt.'],
        ['traffic congestion', 'tắc nghẽn giao thông', 'Traffic congestion wastes a lot of time.', 'Tắc nghẽn giao thông lãng phí nhiều thời gian.'],
        ['pollution', 'ô nhiễm', 'Air pollution is a serious problem in cities.', 'Ô nhiễm không khí là vấn đề nghiêm trọng ở thành phố.'],
        ['noise', 'tiếng ồn', 'I cannot sleep because of the noise.', 'Tôi không ngủ được vì tiếng ồn.'],
        ['overcrowded', 'quá đông đúc', 'The buses are overcrowded in the morning.', 'Xe buýt quá đông vào buổi sáng.'],
        ['cost of living', 'chi phí sinh hoạt', 'The cost of living is high in the capital.', 'Chi phí sinh hoạt ở thủ đô rất cao.'],
        ['facilities', 'tiện ích, cơ sở vật chất', 'The city has excellent medical facilities.', 'Thành phố có cơ sở y tế xuất sắc.'],
        ['amenities', 'tiện nghi', 'Local amenities include a park and a library.', 'Các tiện nghi địa phương gồm công viên và thư viện.'],
        ['entertainment', 'giải trí', 'There is plenty of entertainment in the city.', 'Có rất nhiều hoạt động giải trí trong thành phố.'],
        ['opportunity', 'cơ hội', 'Cities offer more job opportunities.', 'Thành phố mang lại nhiều cơ hội việc làm hơn.'],
        ['employment', 'việc làm', 'Employment is scarce in rural areas.', 'Việc làm khan hiếm ở nông thôn.'],
        ['skyscraper', 'tòa nhà chọc trời', 'Skyscrapers dominate the skyline.', 'Các tòa nhà chọc trời chi phối đường chân trời.'],
        ['slum', 'khu ổ chuột', 'Many families live in slums.', 'Nhiều gia đình sống trong khu ổ chuột.'],
        ['suburb', 'ngoại ô', 'Many families moved to the suburbs.', 'Nhiều gia đình chuyển ra ngoại ô.'],
        ['commuter', 'người đi làm xa', 'Commuters spend two hours on the train.', 'Người đi làm xa mất hai giờ trên tàu.'],
        ['green space', 'không gian xanh', 'The city needs more green space.', 'Thành phố cần thêm không gian xanh.'],
        ['park', 'công viên', 'We jog in the park every morning.', 'Chúng tôi chạy bộ trong công viên mỗi sáng.'],
        ['fresh air', 'không khí trong lành', 'I miss the fresh air of the countryside.', 'Tôi nhớ không khí trong lành của miền quê.'],
        ['peaceful', 'yên bình', 'The village is peaceful and quiet.', 'Ngôi làng yên bình và tĩnh lặng.'],
        ['community', 'cộng đồng', 'There is a strong sense of community in villages.', 'Có tinh thần cộng đồng mạnh ở các ngôi làng.'],
        ['neighbor', 'hàng xóm', 'In the village, everybody knows their neighbors.', 'Ở làng, ai cũng biết hàng xóm của mình.'],
        ['anonymous', 'ẩn danh', 'Life in a big city can feel anonymous.', 'Cuộc sống ở thành phố lớn có thể mang cảm giác ẩn danh.'],
        ['lonely', 'cô đơn', 'Some people feel lonely in big cities.', 'Một số người thấy cô đơn ở thành phố lớn.'],
        ['agriculture', 'nông nghiệp', 'Agriculture is the main activity in the region.', 'Nông nghiệp là hoạt động chính của vùng.'],
        ['farmer', 'nông dân', 'Farmers get up at dawn.', 'Nông dân dậy từ rạng sáng.'],
        ['crop', 'cây trồng', 'The main crop here is rice.', 'Cây trồng chính ở đây là lúa.'],
        ['harvest', 'thu hoạch', 'The harvest begins in September.', 'Mùa thu hoạch bắt đầu vào tháng Chín.'],
        ['livestock', 'gia súc', 'They keep livestock on their land.', 'Họ nuôi gia súc trên đất của mình.'],
        ['remote', 'hẻo lánh', 'The remote village has no hospital.', 'Ngôi làng hẻo lánh không có bệnh viện.'],
        ['isolated', 'bị cô lập', 'Some farms are isolated in winter.', 'Một số trang trại bị cô lập vào mùa đông.'],
        ['access to', 'khả năng tiếp cận', 'Access to healthcare is limited in rural areas.', 'Khả năng tiếp cận y tế bị hạn chế ở nông thôn.'],
        ['broadband', 'internet băng thông rộng', 'Broadband is slow in the countryside.', 'Internet băng thông rộng chậm ở miền quê.'],
        ['depopulation', 'sự giảm dân số', 'Depopulation threatens small villages.', 'Sự giảm dân số đe dọa các ngôi làng nhỏ.'],
        ['quality of life', 'chất lượng cuộc sống', 'Quality of life matters more than salary.', 'Chất lượng cuộc sống quan trọng hơn lương.'],
        ['slow pace', 'nhịp sống chậm', 'I enjoy the slow pace of village life.', 'Tôi thích nhịp sống chậm của làng quê.'],
        ['sustainable', 'bền vững', 'Planners want sustainable cities.', 'Các nhà quy hoạch muốn có đô thị bền vững.'],
        ['smart city', 'thành phố thông minh', 'The smart city uses sensors to manage traffic.', 'Thành phố thông minh dùng cảm biến để quản lý giao thông.'],
      ],
      patterns: [
        ['Many young people move to the city to find better jobs and education.', 'Nhiều người trẻ chuyển lên thành phố để tìm việc làm và giáo dục tốt hơn.'],
        ['On the one hand, cities offer more opportunities; on the other hand, they are expensive and noisy.', 'Một mặt, thành phố mang lại nhiều cơ hội; mặt khác, nó đắt đỏ và ồn ào.'],
        ['Life in the countryside is slower and more peaceful than in the city.', 'Cuộc sống ở nông thôn chậm và yên bình hơn ở thành phố.'],
        ['Rapid urbanization has put great pressure on housing and public services.', 'Đô thị hóa nhanh đã tạo áp lực lớn lên nhà ở và dịch vụ công.'],
        ['I would prefer to live in a small town, where the cost of living is lower.', 'Tôi thích sống ở một thị trấn nhỏ hơn, nơi chi phí sinh hoạt thấp hơn.'],
      ],
      dialogue: [
        ['A', 'Would you rather live in the city or in the countryside?', 'Bạn thích sống ở thành phố hay nông thôn hơn?'],
        ['B', 'I enjoy the city because of the job opportunities and entertainment.', 'Tôi thích thành phố vì có cơ hội việc làm và giải trí.'],
        ['A', 'But it is crowded, noisy and expensive.', 'Nhưng nó đông đúc, ồn ào và đắt đỏ.'],
        ['B', 'True. When I have children, I may move to a quieter place.', 'Đúng. Khi có con, có lẽ tôi sẽ chuyển đến nơi yên tĩnh hơn.'],
        ['A', 'I grew up in a village, and I miss the fresh air and the community.', 'Tôi lớn lên ở một ngôi làng và nhớ không khí trong lành cùng tình làng nghĩa xóm.'],
        ['B', 'Maybe the best choice is a small town near a big city.', 'Có lẽ lựa chọn tốt nhất là một thị trấn nhỏ gần thành phố lớn.'],
      ],
    },
  ],
  reads: {
    'quang-cao-tieu-dung': {
      title: 'How Advertising Shapes What We Buy',
      text: 'Every day, we see hundreds of advertisements on television, in magazines and on our phones. Their aim is simple: to persuade us to buy a product. To do this, advertisers often appeal to our emotions instead of giving us facts. A perfume advertisement may show a happy couple, suggesting that the product will bring us love. Many companies also use celebrities or influencers to endorse their products, because we tend to trust people we admire. As a result, consumers sometimes buy things they do not need. Fortunately, there are rules against misleading advertising, and shoppers today have more tools to protect themselves. They can read reviews, compare prices and check labels. More and more people are also choosing sustainable and ethical products, which forces companies to change their image and their behavior.',
      vi: 'Quảng cáo đánh vào cảm xúc và dùng người nổi tiếng để thuyết phục; người tiêu dùng có thể tự bảo vệ bằng đánh giá, so sánh giá và chọn sản phẩm bền vững.',
      qs: [
        ['What do advertisers often appeal to?', ['Our emotions', 'Our age', 'Our height', 'Our job title'], 0],
        ['Why do companies use celebrities?', ['We tend to trust people we admire.', 'Celebrities are cheap.', 'It is required by law.', 'They sell the product.'], 0],
        ['How can shoppers protect themselves?', ['By reading reviews and comparing prices', 'By ignoring labels', 'By buying the first item', 'By avoiding all shops'], 0],
      ],
    },
    'du-hoc-hoc-truc-tuyen': {
      title: 'Online or Overseas?',
      text: 'More and more students face a difficult question: should they study abroad or take an online degree? Studying overseas offers a rich experience. You improve your language skills, meet people from different cultures and learn to be independent. However, tuition fees and living costs can be very high, and some students feel homesick or experience culture shock. Online study, by contrast, is cheaper and more flexible. You can stay at home, keep your job and study at your own pace. On the other hand, it requires strong self-discipline, and you miss the social life of a campus. Many universities now combine both approaches: students attend lectures in a virtual classroom and spend a semester abroad. Whichever option you choose, make sure the university is accredited and that the qualification is recognized by employers.',
      vi: 'So sánh du học và học trực tuyến: du học giàu trải nghiệm nhưng tốn kém, trực tuyến rẻ và linh hoạt nhưng cần tự kỷ luật; nên chọn trường được công nhận.',
      qs: [
        ['What is an advantage of studying abroad?', ['It is cheaper.', 'You meet people from different cultures.', 'It needs no discipline.', 'You stay at home.'], 1],
        ['What does online study require?', ['Strong self-discipline', 'A visa', 'A scholarship only', 'A campus'], 0],
        ['What should you check before choosing a university?', ['Its logo', 'That it is accredited', 'Its colors', 'Its weather'], 1],
      ],
    },
    'van-hoa-cong-so': {
      title: 'Remote Work: Freedom or Isolation?',
      text: 'Since the pandemic, millions of people have started to work from home. Supporters of remote work say that it saves commuting time, reduces stress and allows employees to arrange their day more flexibly. Many workers also report higher productivity, because they have fewer interruptions than in an open-plan office. However, remote work has drawbacks. Some employees feel isolated and miss the informal chats with colleagues. Others find it hard to separate work from private life, and they end up working overtime. Communication can also be more difficult, especially when team members live in different time zones. To make remote work successful, companies should hold regular video calls, give clear feedback and encourage employees to take breaks. A hybrid model, in which staff spend some days at home and some in the office, may offer the best of both worlds.',
      vi: 'Làm việc từ xa tiết kiệm thời gian và linh hoạt nhưng có thể gây cô lập, khó tách công việc khỏi đời sống; mô hình kết hợp có thể là giải pháp tốt nhất.',
      qs: [
        ['What is one benefit of remote work?', ['It saves commuting time.', 'It increases noise.', 'It removes all deadlines.', 'It ends meetings.'], 0],
        ['What problem do some remote workers have?', ['They feel isolated.', 'They get too many holidays.', 'They never use email.', 'They cannot sleep.'], 0],
        ['What may be the best model?', ['Only office work', 'A hybrid model', 'No work', 'Only night work'], 1],
      ],
    },
    'thanh-pho-nong-thon': {
      title: 'City or Countryside?',
      text: 'Choosing where to live is a personal decision, and both cities and rural areas have their advantages. Cities offer a wide range of jobs, good schools, hospitals and entertainment. They are also well connected by public transport. On the other hand, city life can be stressful: housing is expensive, the air is polluted, and traffic congestion wastes time. Rural areas, in contrast, are peaceful, with fresh air and a strong sense of community. The cost of living is lower, and people often have more space. Nevertheless, villages may lack access to healthcare, fast internet and employment, which is why many young people migrate to the cities. Governments try to reduce this gap by improving infrastructure in the countryside. In the future, remote work may allow more people to enjoy the quality of life of rural areas without losing career opportunities.',
      vi: 'Thành phố có việc làm, giáo dục và giải trí nhưng đắt đỏ, ô nhiễm; nông thôn yên bình, rẻ nhưng thiếu dịch vụ; làm việc từ xa có thể thu hẹp khoảng cách.',
      qs: [
        ['What do cities offer?', ['A wide range of jobs and services', 'No traffic', 'Cheap housing', 'Total silence'], 0],
        ['Why do many young people leave villages?', ['Because villages lack jobs, healthcare and fast internet.', 'Because villages are noisy.', 'Because there are too many shops.', 'Because it is illegal to stay.'], 0],
        ['How may remote work help rural areas?', ['It may let people enjoy rural life without losing career chances.', 'It will close villages.', 'It will increase traffic.', 'It will remove farms.'], 0],
      ],
    },
  },
  defs: `
consumer = a person who buys goods or services
consumption = the using up of goods or energy
consumerism = the belief that buying more things is good
advertising = the business of promoting products to the public
campaign = a series of planned actions to achieve a goal
slogan = a short phrase used in advertising
catchy = easy to remember
billboard = a large board for advertisements outdoors
commercial = an advertisement on radio or television
endorsement = public support for a product
influencer = a person who affects what others buy
sponsor = a person or company that pays for an event or team
brand loyalty = the habit of buying the same brand repeatedly
brand image = the way people think about a brand
target audience = the group of people an advertisement aims at
persuade = to make someone agree to do something
influence = to have an effect on someone's choices
appeal = the quality of being attractive
emotional = connected with strong feelings
misleading = giving a wrong idea
exaggerate = to describe something as larger or better than it is
false claim = a statement that is not true
consumer rights = the legal rights of people who buy goods
guarantee = a promise that something will be of good quality
packaging = the materials used to wrap a product
ingredient = a food used to make a dish or product
organic = produced without artificial chemicals
loyalty card = a card that gives rewards to regular customers
special offer = a reduced price for a limited time
impulse = a sudden strong wish to do something
status symbol = something that shows a person's high social position
luxury = something expensive that is not necessary
necessity = something that you must have
disposable = intended to be thrown away after use
durable = able to last a long time
second-hand = already owned by someone else
fast fashion = cheap clothes made quickly to follow trends
ethical = following moral principles
boycott = to refuse to buy from a company as a protest
recommendation = advice about what is good
spending = the money that is used
overpriced = costing more than it is worth
study abroad = to study in a foreign country
international student = a student from another country
overseas = in or to another country across the sea
admission = permission to enter a school or university
entry requirements = conditions that must be met to join a course
application = a formal request
personal statement = a piece of writing about yourself for an application
reference letter = a letter from someone who recommends you
transcript = an official record of your grades
IELTS = an English test for study and work abroad
tuition fees = money paid for teaching
living costs = money needed for daily life
accommodation = a place to live
halls of residence = buildings where students live
visa = official permission to enter a country
embassy = the offices of a foreign government in a country
orientation = an introduction for new students
lecture = a talk given to students
seminar = a class where a small group discusses a subject
tutorial = a small teaching session
assignment = a piece of work given to students
essay = a short piece of writing
plagiarism = copying someone's work and claiming it as your own
supervisor = a person who guides a student's research
dissertation = a long piece of academic writing
module = a unit of a university course
credit = a unit that shows how much work a course is worth
culture shock = confusion when you enter a very different culture
homesick = feeling sad because you miss home
adapt = to change to fit new conditions
settle in = to become comfortable in a new place
part-time job = work for only a few hours a week
alumni = former students of a school or university
online course = a course taken over the internet
e-learning = learning using electronic media
platform = a website or program used for a service
virtual classroom = an online space where lessons happen
webinar = a seminar held on the internet
self-paced = allowing you to learn at your own speed
self-discipline = the ability to make yourself do things
certificate = an official document that shows you have completed a course
accredited = officially recognized as meeting standards
career prospects = chances of success in a job
broaden = to make wider
workplace = the place where people work
company culture = the shared values and behavior in a company
remote work = work done away from the office
work from home = to do your job at your own house
hybrid = mixing home and office work
flexible hours = working times that can be changed
open-plan = having a large space without walls
meeting = an event where people discuss things
agenda = a list of topics to be discussed
minutes = a written record of a meeting
chair = to lead a meeting
attend = to be present at an event
brainstorm = to produce ideas together quickly
action point = a task agreed at a meeting
workload = the amount of work to be done
prioritize = to decide what is most important
delegate = to give a task to someone else
teamwork = working together as a group
collaborate = to work together with others
communication = the exchange of information
email = a message sent by computer
reply = to answer
forward = to send a message you received to someone else
cc = to send a copy of an email to another person
video call = a call in which people see each other
online meeting = a meeting held over the internet
mute = to turn off the sound
screen sharing = showing your computer screen to others
time zone = a region with the same standard time
productivity = how much work is done in a period
distraction = something that stops you from concentrating
focus = to give all your attention to something
overtime = extra hours of work
feedback = comments about how well someone is doing
performance review = a meeting to judge how well an employee works
appraisal = an official judgment of someone's work
constructive = helpful and intended to improve
training = teaching someone a job skill
mentor = an experienced person who advises a younger person
career path = the series of jobs a person has
colleague = a person you work with
office politics = the use of power and influence at work
bullying = using strength to frighten or hurt weaker people
harassment = unwanted behavior that upsets someone
urban = relating to towns and cities
rural = relating to the countryside
city life = the way of living in a large town
village = a very small town in the countryside
town = a place with many houses and shops, smaller than a city
metropolis = a very large and important city
population = the number of people who live in a place
density = how closely packed things are
urbanization = the growth of towns and cities
migrate = to move to another area to live or work
migration = the movement of people from one place to another
resident = a person who lives in a place
infrastructure = the basic systems, such as roads and electricity
public transport = buses and trains for everyone
traffic congestion = a situation with too many vehicles on the road
pollution = harmful substances in the environment
noise = unpleasant or loud sound
overcrowded = containing too many people
cost of living = the money needed to pay for basic needs
facilities = buildings and equipment for a purpose
amenities = useful features of a place
entertainment = activities that give people enjoyment
opportunity = a chance to do something good
employment = paid work
skyscraper = a very tall building
slum = an area of poor, crowded housing
suburb = an area on the edge of a city
commuter = a person who travels regularly to work
green space = an area of grass and trees in a city
park = a public area with grass and trees
fresh air = clean air
peaceful = quiet and calm
community = people living in the same area
neighbor = a person who lives near you
anonymous = unknown to others
lonely = sad because you are alone
agriculture = the activity of farming
farmer = a person who grows crops or raises animals
crop = a plant grown for food
harvest = the time when crops are collected
livestock = animals kept on a farm
remote = far from towns
isolated = far from other places or people
access to = the ability to use something
broadband = fast internet connection
depopulation = a fall in the number of people living in an area
quality of life = how good your life is
slow pace = a calm, unhurried speed of life
sustainable = able to continue without harming the environment
smart city = a city that uses technology to improve services

## ghi đè theo chủ đề
quang-cao-tieu-dung|label = a piece of paper on a product giving information
quang-cao-tieu-dung|review = an opinion about a product
quang-cao-tieu-dung|influence = to have an effect on someone's choices
quang-cao-tieu-dung|discount = a reduction in price
quang-cao-tieu-dung|afford = to have enough money to buy something
du-hoc-hoc-truc-tuyen|qualification = a certificate or degree you have earned
du-hoc-hoc-truc-tuyen|networking = meeting people to make useful contacts
du-hoc-hoc-truc-tuyen|deadline = the last time by which work must be done
van-hoa-cong-so|chair = to lead a meeting
van-hoa-cong-so|attachment = a file sent together with an email
van-hoa-cong-so|promotion = a move to a higher position at work
van-hoa-cong-so|burnout = extreme tiredness from working too much
thanh-pho-nong-thon|park = a public area with grass and trees
thanh-pho-nong-thon|opportunity = a chance to do something good
thanh-pho-nong-thon|community = people living in the same area
thanh-pho-nong-thon|pollution = harmful substances in the environment
du-hoc-hoc-truc-tuyen|platform = a website or program used to deliver a service
du-hoc-hoc-truc-tuyen|supervisor = a teacher who guides a student's research
van-hoa-cong-so|hybrid = mixing work from home and work in the office
thanh-pho-nong-thon|population = the number of people who live in a place
`,
};
