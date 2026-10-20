// Đợt 2 chủ đề giao tiếp (B1): dịch vụ khách hàng, cảm xúc & tính cách, giao thông, mua sắm trực tuyến.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'dich-vu-khach-hang', title: 'Dịch vụ khách hàng & gọi điện', icon: '🎧', level: 'B1',
      desc: 'Gọi điện, đặt dịch vụ, báo sự cố, khiếu nại và yêu cầu hỗ trợ.',
      words: [
        ['customer service', 'chăm sóc khách hàng', 'I called customer service about my bill.', 'Tôi gọi chăm sóc khách hàng về hóa đơn của mình.'],
        ['hotline', 'đường dây nóng', 'You can call our hotline at any time.', 'Bạn có thể gọi đường dây nóng của chúng tôi bất cứ lúc nào.'],
        ['representative', 'nhân viên đại diện', 'A representative will help you shortly.', 'Một nhân viên sẽ hỗ trợ bạn ngay.'],
        ['operator', 'tổng đài viên', 'The operator transferred my call.', 'Tổng đài viên đã chuyển cuộc gọi của tôi.'],
        ['hold', 'giữ máy', 'Please hold while I check your account.', 'Vui lòng giữ máy trong lúc tôi kiểm tra tài khoản.'],
        ['transfer', 'chuyển máy', 'I will transfer you to the billing department.', 'Tôi sẽ chuyển máy bạn sang bộ phận thanh toán.'],
        ['extension', 'số máy lẻ', 'Please dial extension 205.', 'Vui lòng bấm số máy lẻ 205.'],
        ['voicemail', 'hộp thư thoại', 'I left a message on your voicemail.', 'Tôi để lại tin nhắn trong hộp thư thoại của bạn.'],
        ['call back', 'gọi lại', 'Could you call me back later?', 'Bạn gọi lại cho tôi sau được không?'],
        ['reach', 'liên lạc được', 'I could not reach you this morning.', 'Sáng nay tôi không liên lạc được với bạn.'],
        ['inquiry', 'yêu cầu hỏi thông tin', 'I am calling with an inquiry about your prices.', 'Tôi gọi để hỏi thông tin về giá của bạn.'],
        ['request', 'yêu cầu', 'We received your request yesterday.', 'Chúng tôi đã nhận yêu cầu của bạn hôm qua.'],
        ['complaint', 'lời khiếu nại', 'I would like to make a complaint.', 'Tôi muốn khiếu nại.'],
        ['issue', 'vấn đề', 'We are working on the issue.', 'Chúng tôi đang xử lý vấn đề.'],
        ['problem', 'sự cố', 'There is a problem with my internet.', 'Mạng internet của tôi có sự cố.'],
        ['fault', 'lỗi (thiết bị)', 'The fault was in the router.', 'Lỗi nằm ở bộ định tuyến.'],
        ['technician', 'kỹ thuật viên', 'A technician will visit tomorrow.', 'Một kỹ thuật viên sẽ đến vào ngày mai.'],
        ['repair', 'sửa chữa', 'The repair will take two days.', 'Việc sửa chữa sẽ mất hai ngày.'],
        ['replace', 'thay thế', 'We will replace the faulty part.', 'Chúng tôi sẽ thay bộ phận bị lỗi.'],
        ['warranty', 'bảo hành', 'The phone is still under warranty.', 'Điện thoại vẫn còn trong thời hạn bảo hành.'],
        ['refund', 'hoàn tiền', 'I would like a refund, please.', 'Tôi muốn được hoàn tiền.'],
        ['compensation', 'bồi thường', 'We offer compensation for the delay.', 'Chúng tôi bồi thường cho sự chậm trễ.'],
        ['apologize', 'xin lỗi', 'We apologize for the inconvenience.', 'Chúng tôi xin lỗi vì sự bất tiện.'],
        ['inconvenience', 'sự bất tiện', 'Sorry for any inconvenience.', 'Xin lỗi vì mọi bất tiện.'],
        ['appointment', 'cuộc hẹn', 'I would like to book an appointment.', 'Tôi muốn đặt một cuộc hẹn.'],
        ['available', 'còn trống, có sẵn', 'Is Tuesday morning available?', 'Sáng thứ Ba còn trống không?'],
        ['confirm', 'xác nhận', 'Please confirm your address.', 'Vui lòng xác nhận địa chỉ của bạn.'],
        ['cancel', 'hủy', 'I need to cancel my subscription.', 'Tôi cần hủy gói đăng ký của mình.'],
        ['reschedule', 'dời lịch', 'Can we reschedule for Friday?', 'Chúng ta dời sang thứ Sáu được không?'],
        ['booking', 'đặt chỗ', 'Your booking has been confirmed.', 'Đặt chỗ của bạn đã được xác nhận.'],
        ['reference number', 'mã tham chiếu', 'Please give me your reference number.', 'Vui lòng cho tôi mã tham chiếu của bạn.'],
        ['account', 'tài khoản', 'I cannot log in to my account.', 'Tôi không đăng nhập được vào tài khoản.'],
        ['password', 'mật khẩu', 'I forgot my password.', 'Tôi quên mật khẩu.'],
        ['reset', 'đặt lại', 'I will reset your password now.', 'Tôi sẽ đặt lại mật khẩu cho bạn ngay.'],
        ['verify', 'xác minh', 'We need to verify your identity.', 'Chúng tôi cần xác minh danh tính của bạn.'],
        ['billing', 'thanh toán, lập hóa đơn', 'The billing department is on the second floor.', 'Bộ phận thanh toán ở tầng hai.'],
        ['charge', 'khoản phí; tính phí', 'There is an extra charge on my bill.', 'Có một khoản phí phát sinh trên hóa đơn của tôi.'],
        ['overcharge', 'tính phí quá mức', 'I think you overcharged me.', 'Tôi nghĩ các bạn đã tính phí tôi quá mức.'],
        ['subscription', 'gói đăng ký', 'My subscription renews every month.', 'Gói đăng ký của tôi gia hạn mỗi tháng.'],
        ['upgrade', 'nâng cấp', 'I would like to upgrade my plan.', 'Tôi muốn nâng cấp gói cước.'],
        ['plan', 'gói cước', 'This plan includes unlimited data.', 'Gói cước này có dữ liệu không giới hạn.'],
        ['coverage', 'vùng phủ sóng', 'The coverage is poor in this area.', 'Vùng phủ sóng ở khu vực này kém.'],
        ['signal', 'tín hiệu', 'I have no signal here.', 'Ở đây tôi không có sóng.'],
        ['follow up', 'theo dõi tiếp', 'I will follow up on your case tomorrow.', 'Ngày mai tôi sẽ theo dõi tiếp hồ sơ của bạn.'],
        ['escalate', 'chuyển lên cấp cao hơn', 'I will escalate the problem to my manager.', 'Tôi sẽ chuyển vấn đề lên quản lý của tôi.'],
        ['resolve', 'giải quyết', 'We resolved the issue within an hour.', 'Chúng tôi đã giải quyết vấn đề trong vòng một giờ.'],
        ['feedback', 'phản hồi', 'We welcome your feedback.', 'Chúng tôi hoan nghênh phản hồi của bạn.'],
        ['satisfied', 'hài lòng', 'Are you satisfied with our service?', 'Bạn có hài lòng với dịch vụ của chúng tôi không?'],
        ['survey', 'khảo sát', 'Please complete a short survey.', 'Vui lòng hoàn thành một khảo sát ngắn.'],
        ['patient', 'kiên nhẫn', 'Thank you for being patient.', 'Cảm ơn bạn đã kiên nhẫn.'],
        ['assist', 'hỗ trợ', 'How may I assist you today?', 'Hôm nay tôi có thể hỗ trợ gì cho bạn?'],
        ['hang up', 'cúp máy', 'Do not hang up, please.', 'Làm ơn đừng cúp máy.'],
      ],
      patterns: [
        ['Thank you for calling. How may I help you today?', 'Cảm ơn bạn đã gọi. Hôm nay tôi có thể giúp gì cho bạn?'],
        ['I am calling about a problem with my internet connection.', 'Tôi gọi về sự cố với kết nối internet của mình.'],
        ['Could you hold the line for a moment, please?', 'Bạn vui lòng giữ máy một lát được không?'],
        ['I am sorry to hear that. Let me see what I can do.', 'Tôi rất tiếc khi nghe vậy. Để tôi xem mình có thể làm gì.'],
        ['I would like to speak to your manager about this issue.', 'Tôi muốn nói chuyện với quản lý của bạn về vấn đề này.'],
      ],
      dialogue: [
        ['Agent', 'Good afternoon, customer service. How can I help you?', 'Chào buổi chiều, chăm sóc khách hàng đây. Tôi giúp gì được cho bạn?'],
        ['Customer', 'Hello. My internet has been down since this morning.', 'Xin chào. Mạng của tôi bị mất từ sáng nay.'],
        ['Agent', 'I am sorry about that. Can I have your account number?', 'Tôi rất tiếc. Cho tôi xin số tài khoản của bạn được không?'],
        ['Customer', 'Yes, it is 4 5 8 2 1.', 'Được, số là 4 5 8 2 1.'],
        ['Agent', 'Thank you. I will send a technician tomorrow between nine and eleven.', 'Cảm ơn bạn. Ngày mai tôi sẽ cử kỹ thuật viên đến trong khoảng chín đến mười một giờ.'],
        ['Customer', 'That is fine. Thank you for your help.', 'Được ạ. Cảm ơn bạn đã giúp đỡ.'],
      ],
    },
    {
      id: 'cam-xuc-tinh-cach', title: 'Cảm xúc & tính cách', icon: '🙂', level: 'B1',
      desc: 'Diễn tả cảm xúc, mô tả tính cách, tâm trạng và phản ứng trước tình huống.',
      words: [
        ['emotion', 'cảm xúc', 'She could not hide her emotions.', 'Cô ấy không giấu được cảm xúc.'],
        ['mood', 'tâm trạng', 'He is in a good mood today.', 'Hôm nay anh ấy có tâm trạng tốt.'],
        ['feeling', 'cảm giác', 'I have a strange feeling about this.', 'Tôi có cảm giác lạ về chuyện này.'],
        ['delighted', 'vui sướng', 'I am delighted to see you.', 'Tôi rất vui khi gặp bạn.'],
        ['thrilled', 'phấn khích', 'We were thrilled by the news.', 'Chúng tôi phấn khích trước tin đó.'],
        ['grateful', 'biết ơn', 'I am grateful for your help.', 'Tôi biết ơn sự giúp đỡ của bạn.'],
        ['proud', 'tự hào', 'My parents are proud of me.', 'Bố mẹ tự hào về tôi.'],
        ['relieved', 'nhẹ nhõm', 'I felt relieved after the exam.', 'Tôi thấy nhẹ nhõm sau kỳ thi.'],
        ['excited', 'hào hứng', 'The children are excited about the trip.', 'Bọn trẻ hào hứng về chuyến đi.'],
        ['nervous', 'lo lắng, hồi hộp', 'I am nervous before the interview.', 'Tôi hồi hộp trước buổi phỏng vấn.'],
        ['anxious', 'bồn chồn', 'She felt anxious about the results.', 'Cô ấy thấy bồn chồn về kết quả.'],
        ['worried', 'lo âu', 'He is worried about his health.', 'Anh ấy lo cho sức khỏe của mình.'],
        ['upset', 'buồn bực', 'She was upset by his words.', 'Cô ấy buồn vì lời nói của anh ta.'],
        ['disappointed', 'thất vọng', 'I was disappointed with the film.', 'Tôi thất vọng về bộ phim.'],
        ['embarrassed', 'xấu hổ, ngượng', 'He felt embarrassed when he forgot her name.', 'Anh ấy ngượng khi quên tên cô ấy.'],
        ['ashamed', 'hổ thẹn', 'I am ashamed of what I said.', 'Tôi hổ thẹn vì những gì mình đã nói.'],
        ['jealous', 'ghen tị', 'She was jealous of her sister.', 'Cô ấy ghen tị với chị gái.'],
        ['lonely', 'cô đơn', 'He felt lonely in the new city.', 'Anh ấy thấy cô đơn ở thành phố mới.'],
        ['bored', 'chán', 'The students looked bored.', 'Các học sinh trông có vẻ chán.'],
        ['annoyed', 'khó chịu', 'I get annoyed when people are late.', 'Tôi khó chịu khi người ta đến trễ.'],
        ['furious', 'giận dữ', 'My boss was furious about the mistake.', 'Sếp tôi giận dữ vì lỗi đó.'],
        ['calm', 'bình tĩnh', 'Stay calm and breathe slowly.', 'Hãy bình tĩnh và thở chậm.'],
        ['stressed', 'căng thẳng', 'I feel stressed at work.', 'Tôi thấy căng thẳng ở chỗ làm.'],
        ['exhausted', 'kiệt sức', 'After the long trip, we were exhausted.', 'Sau chuyến đi dài, chúng tôi kiệt sức.'],
        ['cheerful', 'vui vẻ', 'She is a cheerful girl.', 'Cô ấy là cô gái vui vẻ.'],
        ['optimistic', 'lạc quan', 'He is always optimistic.', 'Anh ấy luôn lạc quan.'],
        ['pessimistic', 'bi quan', 'Do not be so pessimistic.', 'Đừng bi quan thế.'],
        ['personality', 'tính cách', 'She has a warm personality.', 'Cô ấy có tính cách ấm áp.'],
        ['character', 'tính cách, bản chất', 'He has a strong character.', 'Anh ấy có bản lĩnh mạnh mẽ.'],
        ['kind', 'tốt bụng', 'The old man was very kind to us.', 'Cụ già rất tốt bụng với chúng tôi.'],
        ['honest', 'trung thực', 'An honest person never lies.', 'Người trung thực không bao giờ nói dối.'],
        ['reliable', 'đáng tin cậy', 'She is a reliable colleague.', 'Cô ấy là đồng nghiệp đáng tin cậy.'],
        ['responsible', 'có trách nhiệm', 'He is a responsible student.', 'Cậu ấy là học sinh có trách nhiệm.'],
        ['patient', 'kiên nhẫn', 'Teachers must be patient.', 'Giáo viên phải kiên nhẫn.'],
        ['impatient', 'thiếu kiên nhẫn', 'He gets impatient in traffic.', 'Anh ấy mất kiên nhẫn khi kẹt xe.'],
        ['generous', 'hào phóng', 'She is generous with her time.', 'Cô ấy hào phóng với thời gian của mình.'],
        ['selfish', 'ích kỷ', 'Do not be selfish. Share it.', 'Đừng ích kỷ. Chia sẻ đi.'],
        ['polite', 'lịch sự', 'The waiter was polite and helpful.', 'Người phục vụ lịch sự và nhiệt tình.'],
        ['rude', 'thô lỗ', 'It is rude to interrupt.', 'Ngắt lời người khác là thô lỗ.'],
        ['confident', 'tự tin', 'She felt confident before the speech.', 'Cô ấy thấy tự tin trước bài phát biểu.'],
        ['shy', 'nhút nhát', 'He is too shy to speak in public.', 'Anh ấy quá nhút nhát để nói trước đám đông.'],
        ['creative', 'sáng tạo', 'She is a creative designer.', 'Cô ấy là nhà thiết kế sáng tạo.'],
        ['ambitious', 'có tham vọng', 'He is young and ambitious.', 'Anh ấy trẻ và đầy tham vọng.'],
        ['lazy', 'lười biếng', 'I feel lazy on Sunday mornings.', 'Tôi thấy lười vào sáng Chủ nhật.'],
        ['hard-working', 'chăm chỉ', 'She is a hard-working student.', 'Cô ấy là học sinh chăm chỉ.'],
        ['sensitive', 'nhạy cảm', 'He is very sensitive to criticism.', 'Anh ấy rất nhạy cảm với lời chê.'],
        ['stubborn', 'bướng bỉnh', 'My brother is stubborn.', 'Anh trai tôi bướng bỉnh.'],
        ['easy-going', 'dễ tính', 'My boss is easy-going.', 'Sếp tôi dễ tính.'],
        ['cope with', 'đối phó với', 'How do you cope with stress?', 'Bạn đối phó với căng thẳng như thế nào?'],
        ['cheer up', 'vui lên', 'Cheer up! Everything will be fine.', 'Vui lên nào! Mọi chuyện sẽ ổn.'],
      ],
      patterns: [
        ['I feel really nervous about tomorrow\'s presentation.', 'Tôi thấy thật hồi hộp về buổi thuyết trình ngày mai.'],
        ['She was disappointed that her friends forgot her birthday.', 'Cô ấy thất vọng vì bạn bè quên sinh nhật mình.'],
        ['He is a kind and reliable person.', 'Anh ấy là người tốt bụng và đáng tin cậy.'],
        ['What makes you angry or upset?', 'Điều gì khiến bạn tức giận hoặc buồn bực?'],
        ['I try to stay calm when things go wrong.', 'Tôi cố giữ bình tĩnh khi mọi việc không suôn sẻ.'],
      ],
      dialogue: [
        ['A', 'You look upset. What is wrong?', 'Trông bạn buồn bực. Có chuyện gì vậy?'],
        ['B', 'I failed my driving test again.', 'Tôi lại trượt bài thi lái xe.'],
        ['A', 'I am sorry to hear that. Do not feel discouraged.', 'Tôi rất tiếc. Đừng nản lòng.'],
        ['B', 'It is hard. I was so nervous during the test.', 'Khó thật. Tôi đã quá hồi hộp lúc thi.'],
        ['A', 'Cheer up! You will pass next time. You are a hard-working person.', 'Vui lên! Lần sau bạn sẽ đậu. Bạn là người chăm chỉ mà.'],
        ['B', 'Thanks. I feel a bit better already.', 'Cảm ơn. Tôi thấy đỡ hơn một chút rồi.'],
      ],
    },
    {
      id: 'giao-thong-phuong-tien', title: 'Giao thông & phương tiện', icon: '🚆', level: 'B1',
      desc: 'Phương tiện công cộng, lái xe, luật giao thông, đường sá và sự cố di chuyển.',
      words: [
        ['transport', 'giao thông, vận tải', 'Public transport is cheap in this city.', 'Phương tiện công cộng ở thành phố này rẻ.'],
        ['vehicle', 'phương tiện', 'Every vehicle must have insurance.', 'Mọi phương tiện đều phải có bảo hiểm.'],
        ['commute', 'đi làm hằng ngày', 'My commute takes forty minutes.', 'Quãng đi làm của tôi mất bốn mươi phút.'],
        ['rush hour', 'giờ cao điểm', 'The roads are crowded during rush hour.', 'Đường sá đông đúc vào giờ cao điểm.'],
        ['traffic', 'giao thông, xe cộ', 'The traffic is terrible today.', 'Hôm nay giao thông tệ quá.'],
        ['traffic jam', 'kẹt xe', 'We were stuck in a traffic jam.', 'Chúng tôi bị kẹt xe.'],
        ['road', 'con đường', 'The road is closed for repairs.', 'Con đường đang đóng để sửa chữa.'],
        ['highway', 'đường cao tốc', 'We drove along the highway.', 'Chúng tôi lái xe trên đường cao tốc.'],
        ['bridge', 'cây cầu', 'The bridge crosses the river.', 'Cây cầu bắc qua sông.'],
        ['roundabout', 'vòng xuyến', 'Take the second exit at the roundabout.', 'Rẽ lối ra thứ hai ở vòng xuyến.'],
        ['pavement', 'vỉa hè', 'Please walk on the pavement.', 'Hãy đi trên vỉa hè.'],
        ['zebra crossing', 'vạch qua đường', 'Cross the road at the zebra crossing.', 'Hãy qua đường ở vạch dành cho người đi bộ.'],
        ['pedestrian', 'người đi bộ', 'Drivers must stop for pedestrians.', 'Tài xế phải dừng cho người đi bộ.'],
        ['driver', 'tài xế', 'The driver was very careful.', 'Người tài xế rất cẩn thận.'],
        ['passenger', 'hành khách', 'There were fifty passengers on the bus.', 'Có năm mươi hành khách trên xe buýt.'],
        ['driving license', 'bằng lái xe', 'I took my driving license test last week.', 'Tôi thi bằng lái xe tuần trước.'],
        ['traffic rules', 'luật giao thông', 'Everyone must follow traffic rules.', 'Mọi người phải tuân thủ luật giao thông.'],
        ['speed limit', 'giới hạn tốc độ', 'The speed limit here is fifty.', 'Giới hạn tốc độ ở đây là năm mươi.'],
        ['fine', 'tiền phạt', 'He paid a fine for speeding.', 'Anh ấy nộp phạt vì chạy quá tốc độ.'],
        ['seat belt', 'dây an toàn', 'Always wear your seat belt.', 'Luôn thắt dây an toàn.'],
        ['helmet', 'mũ bảo hiểm', 'You must wear a helmet on a motorbike.', 'Bạn phải đội mũ bảo hiểm khi đi xe máy.'],
        ['motorbike', 'xe máy', 'Many people ride a motorbike to work.', 'Nhiều người đi làm bằng xe máy.'],
        ['bicycle', 'xe đạp', 'I go to school by bicycle.', 'Tôi đi học bằng xe đạp.'],
        ['bus', 'xe buýt', 'The bus arrives every ten minutes.', 'Xe buýt đến cứ mười phút một chuyến.'],
        ['coach', 'xe khách', 'We took a coach to the coast.', 'Chúng tôi đi xe khách ra biển.'],
        ['tram', 'tàu điện mặt đất', 'The tram runs through the city center.', 'Tàu điện chạy qua trung tâm thành phố.'],
        ['metro', 'tàu điện ngầm', 'The metro is fast and clean.', 'Tàu điện ngầm nhanh và sạch.'],
        ['train', 'tàu hỏa', 'The train to Hue leaves at six.', 'Chuyến tàu đi Huế khởi hành lúc sáu giờ.'],
        ['platform', 'sân ga', 'The train leaves from platform three.', 'Tàu khởi hành từ sân ga số ba.'],
        ['timetable', 'lịch trình tàu xe', 'Check the timetable before you leave.', 'Hãy xem lịch trình trước khi đi.'],
        ['ticket office', 'quầy bán vé', 'Buy your ticket at the ticket office.', 'Mua vé ở quầy bán vé.'],
        ['season ticket', 'vé tháng', 'I bought a season ticket for the bus.', 'Tôi mua vé tháng đi xe buýt.'],
        ['fare', 'giá vé', 'The bus fare is very cheap.', 'Giá vé xe buýt rất rẻ.'],
        ['delay', 'sự chậm trễ', 'The train had a long delay.', 'Chuyến tàu bị chậm rất lâu.'],
        ['cancelled', 'bị hủy', 'My flight was cancelled.', 'Chuyến bay của tôi bị hủy.'],
        ['miss', 'lỡ', 'I missed the last bus.', 'Tôi đã lỡ chuyến xe buýt cuối.'],
        ['get on', 'lên (xe)', 'Get on the bus at the next stop.', 'Lên xe buýt ở trạm tiếp theo.'],
        ['get off', 'xuống (xe)', 'Get off at the main station.', 'Xuống ở ga chính.'],
        ['change', 'đổi tuyến', 'You need to change at the central station.', 'Bạn cần đổi tuyến ở ga trung tâm.'],
        ['park', 'đỗ xe', 'You cannot park here.', 'Bạn không được đỗ xe ở đây.'],
        ['parking lot', 'bãi đỗ xe', 'The parking lot is full.', 'Bãi đỗ xe đã đầy.'],
        ['petrol station', 'trạm xăng', 'There is a petrol station on the left.', 'Có một trạm xăng ở bên trái.'],
        ['fuel', 'nhiên liệu', 'The car is running out of fuel.', 'Xe sắp hết nhiên liệu.'],
        ['engine', 'động cơ', 'The engine makes a strange noise.', 'Động cơ phát ra tiếng lạ.'],
        ['brake', 'phanh', 'The brakes do not work well.', 'Phanh hoạt động không tốt.'],
        ['accident', 'tai nạn', 'There was a serious accident on the road.', 'Có một vụ tai nạn nghiêm trọng trên đường.'],
        ['road works', 'công trình đường', 'Road works are causing long delays.', 'Công trình đường gây chậm trễ lớn.'],
        ['detour', 'đường vòng', 'We took a detour because of the flood.', 'Chúng tôi đi đường vòng vì ngập lụt.'],
        ['GPS', 'định vị GPS', 'I follow the GPS to find the way.', 'Tôi theo GPS để tìm đường.'],
        ['carpool', 'đi chung xe', 'We carpool to work to save money.', 'Chúng tôi đi chung xe đến chỗ làm để tiết kiệm.'],
        ['electric car', 'xe điện', 'An electric car is quiet and clean.', 'Xe điện êm và sạch.'],
      ],
      patterns: [
        ['How often does the bus to the airport run?', 'Xe buýt ra sân bay chạy bao lâu một chuyến?'],
        ['I usually take the metro to work because it is faster than driving.', 'Tôi thường đi tàu điện ngầm đi làm vì nó nhanh hơn lái xe.'],
        ['We were late because we got stuck in a traffic jam.', 'Chúng tôi đến trễ vì bị kẹt xe.'],
        ['You need to change trains at the next station.', 'Bạn cần đổi tàu ở ga tiếp theo.'],
        ['Please wear your seat belt and obey the speed limit.', 'Hãy thắt dây an toàn và tuân thủ giới hạn tốc độ.'],
      ],
      dialogue: [
        ['Tourist', 'Excuse me, how can I get to the airport?', 'Xin lỗi, làm sao để tôi ra sân bay?'],
        ['Local', 'You can take bus number 86. It leaves from the stop over there.', 'Bạn có thể đi xe buýt số 86. Nó khởi hành từ trạm đằng kia.'],
        ['Tourist', 'How long does it take?', 'Đi mất bao lâu?'],
        ['Local', 'About forty minutes, but it is longer during rush hour.', 'Khoảng bốn mươi phút, nhưng lâu hơn vào giờ cao điểm.'],
        ['Tourist', 'And how much is the fare?', 'Còn giá vé là bao nhiêu?'],
        ['Local', 'It is only two dollars. You can pay the driver directly.', 'Chỉ hai đô la. Bạn có thể trả trực tiếp cho tài xế.'],
      ],
    },
    {
      id: 'mua-sam-truc-tuyen', title: 'Mua sắm trực tuyến & giao hàng', icon: '📦', level: 'B1',
      desc: 'Đặt hàng online, thanh toán, vận chuyển, đổi trả và đánh giá sản phẩm.',
      words: [
        ['online store', 'cửa hàng trực tuyến', 'This online store has many discounts.', 'Cửa hàng trực tuyến này có nhiều giảm giá.'],
        ['website', 'trang web', 'I ordered it from the company website.', 'Tôi đặt hàng từ trang web của công ty.'],
        ['app', 'ứng dụng', 'I buy groceries using an app.', 'Tôi mua đồ tạp hóa bằng ứng dụng.'],
        ['search', 'tìm kiếm', 'Search for the product by name.', 'Tìm sản phẩm theo tên.'],
        ['filter', 'bộ lọc; lọc', 'Use the filter to see cheaper items.', 'Dùng bộ lọc để xem hàng rẻ hơn.'],
        ['category', 'danh mục', 'Choose a category on the left.', 'Hãy chọn một danh mục ở bên trái.'],
        ['product', 'sản phẩm', 'The product is available in three colors.', 'Sản phẩm có sẵn ba màu.'],
        ['description', 'mô tả', 'Read the description carefully.', 'Hãy đọc kỹ phần mô tả.'],
        ['specification', 'thông số kỹ thuật', 'The specifications are listed below.', 'Thông số kỹ thuật được liệt kê bên dưới.'],
        ['review', 'đánh giá', 'I read many reviews before buying.', 'Tôi đọc nhiều đánh giá trước khi mua.'],
        ['rating', 'điểm đánh giá', 'The product has a rating of 4.5 stars.', 'Sản phẩm có điểm đánh giá 4,5 sao.'],
        ['comment', 'bình luận', 'Customers left positive comments.', 'Khách hàng để lại nhiều bình luận tích cực.'],
        ['compare', 'so sánh', 'Compare prices on different websites.', 'So sánh giá trên các trang web khác nhau.'],
        ['wish list', 'danh sách yêu thích', 'I added the shoes to my wish list.', 'Tôi thêm đôi giày vào danh sách yêu thích.'],
        ['shopping cart', 'giỏ hàng', 'Put the item in your shopping cart.', 'Cho món hàng vào giỏ hàng của bạn.'],
        ['checkout', 'thanh toán', 'Click checkout to pay.', 'Bấm thanh toán để trả tiền.'],
        ['order', 'đơn hàng; đặt hàng', 'I placed an order last night.', 'Tôi đã đặt hàng tối qua.'],
        ['order number', 'mã đơn hàng', 'Please quote your order number.', 'Vui lòng cung cấp mã đơn hàng của bạn.'],
        ['payment', 'thanh toán', 'Payment is by credit card or bank transfer.', 'Thanh toán bằng thẻ tín dụng hoặc chuyển khoản.'],
        ['credit card', 'thẻ tín dụng', 'Can I pay by credit card?', 'Tôi trả bằng thẻ tín dụng được không?'],
        ['bank transfer', 'chuyển khoản ngân hàng', 'I paid by bank transfer.', 'Tôi trả bằng chuyển khoản ngân hàng.'],
        ['cash on delivery', 'trả tiền khi nhận hàng', 'Cash on delivery is available.', 'Có thể trả tiền khi nhận hàng.'],
        ['voucher', 'phiếu giảm giá', 'I used a voucher to save ten percent.', 'Tôi dùng phiếu giảm giá để tiết kiệm mười phần trăm.'],
        ['promo code', 'mã khuyến mãi', 'Enter the promo code at checkout.', 'Nhập mã khuyến mãi khi thanh toán.'],
        ['discount', 'giảm giá', 'There is a 20 percent discount today.', 'Hôm nay có giảm giá 20 phần trăm.'],
        ['free shipping', 'miễn phí vận chuyển', 'Orders over fifty dollars get free shipping.', 'Đơn trên năm mươi đô được miễn phí vận chuyển.'],
        ['shipping', 'vận chuyển', 'Shipping takes three to five days.', 'Vận chuyển mất ba đến năm ngày.'],
        ['delivery', 'giao hàng', 'Delivery is free within the city.', 'Giao hàng miễn phí trong thành phố.'],
        ['courier', 'người giao hàng', 'The courier rang my doorbell.', 'Người giao hàng bấm chuông cửa nhà tôi.'],
        ['tracking number', 'mã theo dõi', 'You can use the tracking number to follow your parcel.', 'Bạn có thể dùng mã theo dõi để theo dõi bưu kiện.'],
        ['parcel', 'bưu kiện', 'My parcel arrived this morning.', 'Bưu kiện của tôi đến sáng nay.'],
        ['package', 'gói hàng', 'The package was damaged.', 'Gói hàng bị hư hỏng.'],
        ['dispatch', 'xuất kho, gửi đi', 'Your order will be dispatched tomorrow.', 'Đơn hàng của bạn sẽ được gửi đi vào ngày mai.'],
        ['arrive', 'đến nơi', 'The goods should arrive on Friday.', 'Hàng sẽ đến vào thứ Sáu.'],
        ['in stock', 'còn hàng', 'This size is in stock.', 'Cỡ này còn hàng.'],
        ['out of stock', 'hết hàng', 'The red one is out of stock.', 'Màu đỏ đã hết hàng.'],
        ['size chart', 'bảng kích cỡ', 'Check the size chart before ordering.', 'Xem bảng kích cỡ trước khi đặt.'],
        ['fit', 'vừa vặn', 'The jacket does not fit me.', 'Chiếc áo khoác không vừa với tôi.'],
        ['return', 'trả lại hàng', 'You can return the item within 30 days.', 'Bạn có thể trả hàng trong vòng 30 ngày.'],
        ['exchange', 'đổi hàng', 'I would like to exchange it for a larger size.', 'Tôi muốn đổi sang cỡ lớn hơn.'],
        ['refund', 'hoàn tiền', 'The refund will arrive in five days.', 'Tiền hoàn lại sẽ về sau năm ngày.'],
        ['return policy', 'chính sách đổi trả', 'Read the return policy first.', 'Hãy đọc chính sách đổi trả trước.'],
        ['receipt', 'biên lai', 'Keep the receipt in case of problems.', 'Giữ biên lai phòng khi có sự cố.'],
        ['damaged', 'bị hư hỏng', 'The screen arrived damaged.', 'Màn hình đến nơi bị hư hỏng.'],
        ['faulty', 'bị lỗi', 'The product is faulty.', 'Sản phẩm bị lỗi.'],
        ['fake', 'hàng giả', 'Be careful of fake products.', 'Hãy cẩn thận với hàng giả.'],
        ['scam', 'lừa đảo', 'That website looks like a scam.', 'Trang web đó trông giống lừa đảo.'],
        ['secure', 'an toàn, bảo mật', 'Make sure the payment page is secure.', 'Hãy chắc rằng trang thanh toán an toàn.'],
        ['customer support', 'hỗ trợ khách hàng', 'Contact customer support if you have a problem.', 'Liên hệ hỗ trợ khách hàng nếu bạn có vấn đề.'],
        ['bargain', 'món hời', 'I found a real bargain online.', 'Tôi tìm được một món hời thật sự trên mạng.'],
        ['flash sale', 'đợt giảm giá chớp nhoáng', 'The flash sale ends at midnight.', 'Đợt giảm giá chớp nhoáng kết thúc lúc nửa đêm.'],
      ],
      patterns: [
        ['I ordered a pair of shoes online, but they have not arrived yet.', 'Tôi đặt một đôi giày trên mạng nhưng chúng chưa đến.'],
        ['Is it possible to track my parcel with the tracking number?', 'Có thể theo dõi bưu kiện bằng mã theo dõi không?'],
        ['The item I received is different from the picture on the website.', 'Món hàng tôi nhận được khác với hình trên trang web.'],
        ['I would like to return this jacket and get a refund.', 'Tôi muốn trả lại chiếc áo khoác này và được hoàn tiền.'],
        ['Always read the reviews before you buy something online.', 'Luôn đọc đánh giá trước khi mua hàng trên mạng.'],
      ],
      dialogue: [
        ['Customer', 'Hello, I ordered a laptop last week, but it has not arrived.', 'Xin chào, tuần trước tôi đặt một chiếc laptop nhưng chưa nhận được.'],
        ['Support', 'Could I have your order number, please?', 'Cho tôi xin mã đơn hàng của bạn được không?'],
        ['Customer', 'It is 7 3 9 2 1 0.', 'Là 7 3 9 2 1 0.'],
        ['Support', 'The courier tried to deliver it yesterday, but nobody was home.', 'Người giao hàng đã thử giao hôm qua nhưng không có ai ở nhà.'],
        ['Customer', 'Oh, I see. Can you deliver it again tomorrow?', 'À, tôi hiểu rồi. Ngày mai các bạn giao lại được không?'],
        ['Support', 'Of course. I will arrange it for tomorrow morning.', 'Tất nhiên. Tôi sẽ sắp xếp giao vào sáng mai.'],
      ],
    },
  ],
  reads: {
    'dich-vu-khach-hang': {
      title: 'A Problem with My Phone Bill',
      text: 'Last month, Mai received a phone bill that was much higher than usual. She checked the details and found an extra charge for international calls that she had never made. She decided to call customer service. After waiting on hold for five minutes, a representative answered. Mai explained the problem and gave her account number. The representative apologized for the inconvenience and said she would investigate the matter. She asked Mai to hold for a moment. After a few minutes, she confirmed that the charge was a mistake and promised to remove it. She also gave Mai a reference number and told her that the refund would appear on the next bill. Mai thanked her and felt relieved that the problem was solved so quickly.',
      vi: 'Mai thấy hóa đơn điện thoại có khoản phí lạ, gọi chăm sóc khách hàng; nhân viên xác nhận lỗi, hứa xóa phí và đưa mã tham chiếu.',
      qs: [
        ['What was wrong with Mai\'s bill?', ['It was too late.', 'It had an extra charge for international calls.', 'It was missing.', 'It was in another language.'], 1],
        ['What did the representative give Mai?', ['A reference number', 'A new phone', 'A discount card', 'A free call'], 0],
        ['How did Mai feel at the end?', ['Angry', 'Relieved', 'Bored', 'Nervous'], 1],
      ],
    },
    'cam-xuc-tinh-cach': {
      title: 'Two Very Different Brothers',
      text: 'Nam and his brother Long are twins, but their personalities could not be more different. Nam is outgoing and cheerful. He makes friends easily and loves speaking in front of a crowd. When he is nervous, he laughs and tells jokes. Long, on the other hand, is shy and sensitive. He prefers staying at home with a book to going to a party. However, Long is extremely reliable and patient. When a friend has a problem, he always listens carefully and tries to help. Their mother says that they complement each other. Nam brings energy to the family, while Long brings calm. Although they sometimes get annoyed with each other, they are very proud of one another.',
      vi: 'Hai anh em sinh đôi có tính cách trái ngược: Nam hướng ngoại, vui vẻ; Long nhút nhát, nhạy cảm nhưng đáng tin cậy và kiên nhẫn.',
      qs: [
        ['How is Nam described?', ['Shy and quiet', 'Outgoing and cheerful', 'Lazy', 'Selfish'], 1],
        ['What does Long prefer to do?', ['Go to parties', 'Stay at home with a book', 'Speak in public', 'Travel'], 1],
        ['What does their mother say?', ['They are the same.', 'They complement each other.', 'They never argue.', 'They are strangers.'], 1],
      ],
    },
    'giao-thong-phuong-tien': {
      title: 'My Journey to Work',
      text: 'Every morning, I leave home at seven thirty and walk to the bus stop. The bus ride to the city center usually takes about forty minutes, but during rush hour it can take an hour because of the heavy traffic. In the past, I drove to work, but parking was expensive and stressful. Now I take the metro for the second part of the journey. It is fast, clean and always on time. I bought a monthly season ticket, which saves me money. Sometimes, when the weather is nice, I ride my bicycle instead. It is good exercise, and I do not have to worry about delays. I think public transport is better for the environment, too.',
      vi: 'Hành trình đi làm gồm xe buýt và tàu điện ngầm, có vé tháng; đôi khi đi xe đạp; tác giả thấy giao thông công cộng tốt cho môi trường.',
      qs: [
        ['Why did the writer stop driving to work?', ['Parking was expensive and stressful.', 'The car was broken.', 'The roads were closed.', 'He lost his license.'], 0],
        ['What does the writer use to save money?', ['A season ticket', 'A taxi', 'A motorbike', 'A parking card'], 0],
        ['What does the writer do when the weather is nice?', ['Stay at home', 'Ride a bicycle', 'Take a taxi', 'Drive'], 1],
      ],
    },
    'mua-sam-truc-tuyen': {
      title: 'Tips for Safe Online Shopping',
      text: 'Shopping online is convenient, but it also has risks. Before you buy something, check that the website is secure. The address should start with https, and there should be a lock symbol in the browser. Read the product description and the customer reviews carefully, and compare prices on different sites. Be careful with prices that seem too good to be true, because they may be a scam or a fake product. When you pay, use a credit card or a trusted payment service, and never share your password. After you order, keep the receipt and the order number. If the parcel arrives damaged or the item is faulty, contact customer support quickly. Most shops allow you to return products within thirty days.',
      vi: 'Mẹo mua sắm an toàn: kiểm tra trang web bảo mật, đọc mô tả và đánh giá, so sánh giá, cẩn thận giá quá rẻ, giữ biên lai và liên hệ hỗ trợ khi hàng lỗi.',
      qs: [
        ['What should the website address start with?', ['www', 'https', 'shop', 'mail'], 1],
        ['Why should you be careful with very low prices?', ['They may be a scam or fake product.', 'They are always best.', 'They mean free shipping.', 'They are for members only.'], 0],
        ['What should you do if the parcel is damaged?', ['Throw it away.', 'Contact customer support quickly.', 'Wait for a year.', 'Order again.'], 1],
      ],
    },
  },
  defs: `
customer service = the department that helps customers with questions
hotline = a telephone line for quick help
representative = a person who acts for a company
operator = a person who connects telephone calls
hold = to wait on the telephone before someone answers
transfer = to move a call to another person
extension = an internal telephone number in a building
voicemail = a system that records telephone messages
call back = to telephone someone again
reach = to make contact with someone
inquiry = a question asking for information
request = a polite demand for something
complaint = a statement that you are not satisfied
issue = a problem or topic
problem = something that causes difficulty
fault = a flaw in a machine or product
technician = a person trained to repair equipment
repair = to fix something that is broken
replace = to put a new thing in place of another
warranty = a promise to repair a product if it breaks
refund = money returned to a customer
compensation = money paid to make up for a loss
apologize = to say that you are sorry
inconvenience = something that causes trouble
appointment = an arrangement to meet at a certain time
available = free to be used or seen
confirm = to say that something is certain
cancel = to say that something planned will not happen
reschedule = to change the time of an event
booking = a reservation
reference number = a number used to find a record
account = an arrangement that lets you use a service
password = a secret word for entering a system
reset = to set something back to its starting state
verify = to check that something is true
billing = the sending of bills for payment
charge = an amount of money asked for a service
overcharge = to ask for too much money
subscription = a regular payment for a service
upgrade = to change to a better version
plan = a set of services you pay for
signal = a wave that carries information to a phone
follow up = to take more action after a first contact
escalate = to pass a problem to a more senior person
resolve = to find a solution to a problem
feedback = comments about how good something is
satisfied = pleased with what you have received
survey = a set of questions asked to many people
patient = able to wait calmly
assist = to help
hang up = to end a telephone call
emotion = a strong feeling such as joy or anger
mood = the way you feel at a particular time
feeling = an emotion or a physical sensation
delighted = very pleased
thrilled = extremely excited and happy
grateful = feeling thankful
proud = pleased about something you or others have done
relieved = happy because a worry has gone
excited = very happy and eager about something
nervous = worried about something that might happen
anxious = worried and uneasy
worried = unhappy because you think something bad may happen
upset = unhappy and disturbed
disappointed = sad because something was not as good as hoped
embarrassed = feeling ashamed or awkward in front of others
ashamed = feeling guilty about something bad you did
jealous = unhappy because someone has what you want
lonely = sad because you have no friends near you
bored = tired of something that is not interesting
annoyed = slightly angry
furious = extremely angry
calm = quiet and not worried
stressed = feeling very worried and tense
exhausted = extremely tired
cheerful = happy and positive
optimistic = expecting good things to happen
pessimistic = expecting bad things to happen
personality = the qualities that make a person different from others
character = the qualities that make up a person
kind = friendly and caring toward others
honest = telling the truth
reliable = able to be trusted
responsible = doing your duty well
impatient = unable to wait calmly
generous = willing to give freely
selfish = caring only about yourself
polite = showing good manners
rude = showing bad manners
confident = sure of yourself
shy = nervous with other people
creative = able to produce new ideas
ambitious = wanting to succeed
lazy = not willing to work
hard-working = putting a lot of effort into work
sensitive = easily hurt or upset
stubborn = refusing to change your mind
easy-going = relaxed and not easily upset
cope with = to deal successfully with a difficult situation
cheer up = to become happier
transport = a system for moving people and goods
vehicle = a machine such as a car or bus
commute = to travel regularly between home and work
rush hour = the time when roads are very busy
traffic = vehicles moving on a road
traffic jam = a long line of vehicles that cannot move
road = a hard path for vehicles
highway = a wide main road
bridge = a structure built over a river or road
roundabout = a circular road junction
pavement = a path at the side of a road for walking
zebra crossing = a place marked with stripes where people cross the road
pedestrian = a person who walks
driver = a person who drives a vehicle
passenger = a person who travels in a vehicle
driving license = an official document that allows you to drive
traffic rules = laws for using roads
speed limit = the fastest speed allowed on a road
fine = money paid as a punishment
seat belt = a strap that holds you in a car seat
helmet = a hard hat that protects your head
motorbike = a two-wheeled vehicle with an engine
bicycle = a two-wheeled vehicle you pedal
bus = a large vehicle that carries many passengers
coach = a comfortable bus for long journeys
tram = an electric vehicle that runs on rails in the street
metro = an underground railway in a city
train = vehicles on rails that carry people
platform = the raised area at a station where you wait for a train
timetable = a list showing when buses and trains leave
ticket office = a place where tickets are sold
season ticket = a ticket valid for many journeys over a period
fare = the money you pay for a journey
delay = a period of waiting because of a problem
cancelled = decided not to happen
miss = to be too late for something
get on = to enter a bus, train or plane
get off = to leave a bus, train or plane
change = to leave one train and take another
park = to leave a vehicle in a place
parking lot = an area where cars are left
petrol station = a place where you buy fuel for your car
fuel = a substance burned for energy, such as petrol
engine = a machine that makes a vehicle move
brake = a device for slowing down or stopping
accident = an unexpected event that causes damage or injury
road works = repairs being done on a road
detour = a longer route used to avoid a problem
GPS = a system that shows your position and directions
carpool = to share a car with others for regular trips
electric car = a car powered by electricity
online store = a shop on the internet
website = a place on the internet with information
app = a program on a phone
search = to look for something
filter = to show only the items that match your choice
category = a group of similar things
product = something that is made to be sold
description = a statement that tells what something is like
specification = a detailed list of a product's features
review = an opinion about a product
rating = a score showing how good something is
comment = a written remark
compare = to see how things are alike or different
wish list = a list of things you would like to buy
shopping cart = a virtual basket for items you want to buy
checkout = the place or page where you pay
order = a request for goods
order number = a number that identifies your purchase
payment = the act of paying money
credit card = a card that lets you buy now and pay later
bank transfer = sending money from one bank account to another
cash on delivery = paying in cash when goods arrive
voucher = a paper or code that gives a discount
promo code = letters and numbers that give a discount
discount = a reduction in price
free shipping = delivery that costs nothing
shipping = sending goods to a customer
delivery = bringing goods to a place
courier = a person who delivers parcels
tracking number = a number used to follow a parcel's journey
parcel = something wrapped to be sent by post
package = a box or bag containing goods
dispatch = to send something to a place
arrive = to reach a place
in stock = available to buy
out of stock = not available to buy
size chart = a table showing sizes
fit = to be the right size
return = to send goods back
exchange = to give something back for another one
return policy = the rules for sending goods back
receipt = a paper showing that you have paid
damaged = broken or harmed
faulty = not working properly
fake = not real
scam = a dishonest way of getting money
secure = safe from danger or theft
customer support = help given to customers
bargain = something bought for less than its usual price
flash sale = a sale that lasts a very short time

## ghi đè theo chủ đề
giao-thong-phuong-tien|fine = money paid as a punishment
giao-thong-phuong-tien|timetable = a list showing when buses and trains leave
dich-vu-khach-hang|extension = an internal telephone number in a building
dich-vu-khach-hang|repair = to fix something that is broken
cam-xuc-tinh-cach|character = the qualities that make up a person
mua-sam-truc-tuyen|specification = a detailed list of a product's features
giao-thong-phuong-tien|coach = a comfortable bus for long journeys
`,
};
