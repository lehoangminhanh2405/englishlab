// Đợt 1 chủ đề giao tiếp (A2): nhà cửa, thể thao & giải trí, trường học, nấu ăn.
export const batch = {
  track: 'giao-tiep',
  topics: [
    {
      id: 'nha-cua', title: 'Nhà cửa & đồ đạc', icon: '🏠', level: 'A2',
      desc: 'Các phòng, đồ nội thất, đồ dùng trong nhà và việc nhà hằng ngày.',
      words: [
        ['house', 'ngôi nhà', 'We live in a small house.', 'Chúng tôi sống trong một ngôi nhà nhỏ.'],
        ['apartment', 'căn hộ', 'My apartment is on the third floor.', 'Căn hộ của tôi ở tầng ba.'],
        ['room', 'phòng', 'This room is very bright.', 'Căn phòng này rất sáng.'],
        ['living room', 'phòng khách', 'We watch TV in the living room.', 'Chúng tôi xem tivi ở phòng khách.'],
        ['bedroom', 'phòng ngủ', 'My bedroom has a big window.', 'Phòng ngủ của tôi có cửa sổ lớn.'],
        ['bathroom', 'phòng tắm', 'The bathroom is next to the kitchen.', 'Phòng tắm ở cạnh bếp.'],
        ['kitchen', 'nhà bếp', 'Mom is cooking in the kitchen.', 'Mẹ đang nấu ăn trong bếp.'],
        ['garden', 'khu vườn', 'There are many flowers in the garden.', 'Có nhiều hoa trong vườn.'],
        ['balcony', 'ban công', 'I drink coffee on the balcony.', 'Tôi uống cà phê trên ban công.'],
        ['garage', 'nhà để xe', 'The car is in the garage.', 'Chiếc xe ở trong nhà để xe.'],
        ['floor', 'sàn nhà; tầng', 'The floor is clean.', 'Sàn nhà sạch sẽ.'],
        ['wall', 'bức tường', 'There is a picture on the wall.', 'Có một bức tranh trên tường.'],
        ['ceiling', 'trần nhà', 'The ceiling is white.', 'Trần nhà màu trắng.'],
        ['door', 'cửa ra vào', 'Please close the door.', 'Vui lòng đóng cửa lại.'],
        ['window', 'cửa sổ', 'Open the window, please.', 'Làm ơn mở cửa sổ ra.'],
        ['stairs', 'cầu thang', 'Our house has wooden stairs.', 'Nhà chúng tôi có cầu thang gỗ.'],
        ['furniture', 'đồ nội thất', 'We bought new furniture.', 'Chúng tôi mua đồ nội thất mới.'],
        ['table', 'cái bàn', 'The table is in the middle.', 'Cái bàn ở giữa phòng.'],
        ['chair', 'cái ghế', 'Take a chair and sit down.', 'Lấy ghế và ngồi xuống đi.'],
        ['sofa', 'ghế sofa', 'The cat sleeps on the sofa.', 'Con mèo ngủ trên ghế sofa.'],
        ['bed', 'cái giường', 'I make my bed every morning.', 'Tôi dọn giường mỗi sáng.'],
        ['wardrobe', 'tủ quần áo', 'My clothes are in the wardrobe.', 'Quần áo của tôi ở trong tủ.'],
        ['shelf', 'cái kệ', 'Put the books on the shelf.', 'Để sách lên kệ.'],
        ['desk', 'bàn làm việc', 'I do my homework at my desk.', 'Tôi làm bài tập ở bàn học.'],
        ['lamp', 'đèn', 'Turn on the lamp, please.', 'Làm ơn bật đèn lên.'],
        ['curtain', 'rèm cửa', 'Close the curtains at night.', 'Kéo rèm vào ban đêm.'],
        ['carpet', 'thảm', 'The carpet is soft.', 'Tấm thảm rất mềm.'],
        ['mirror', 'gương', 'There is a mirror in the bathroom.', 'Có một chiếc gương trong phòng tắm.'],
        ['pillow', 'cái gối', 'I need another pillow.', 'Tôi cần thêm một cái gối.'],
        ['blanket', 'cái chăn', 'Take a blanket. It is cold.', 'Lấy chăn đi. Trời lạnh.'],
        ['fridge', 'tủ lạnh', 'The milk is in the fridge.', 'Sữa ở trong tủ lạnh.'],
        ['stove', 'bếp nấu', 'Turn off the stove.', 'Tắt bếp đi.'],
        ['oven', 'lò nướng', 'The cake is in the oven.', 'Chiếc bánh đang ở trong lò nướng.'],
        ['microwave', 'lò vi sóng', 'Heat the soup in the microwave.', 'Hâm súp trong lò vi sóng.'],
        ['washing machine', 'máy giặt', 'The washing machine is broken.', 'Máy giặt bị hỏng rồi.'],
        ['air conditioner', 'máy điều hòa', 'Turn on the air conditioner. It is hot.', 'Bật máy điều hòa lên. Trời nóng.'],
        ['fan', 'cái quạt', 'The fan is on the ceiling.', 'Cái quạt ở trên trần nhà.'],
        ['bathtub', 'bồn tắm', 'She is in the bathtub.', 'Cô ấy đang trong bồn tắm.'],
        ['shower', 'vòi hoa sen', 'I take a shower every day.', 'Tôi tắm mỗi ngày.'],
        ['towel', 'khăn tắm', 'Here is a clean towel.', 'Đây là một chiếc khăn sạch.'],
        ['soap', 'xà phòng', 'Wash your hands with soap.', 'Rửa tay bằng xà phòng.'],
        ['broom', 'cái chổi', 'I sweep the floor with a broom.', 'Tôi quét sàn bằng cái chổi.'],
        ['clean', 'dọn dẹp; sạch', 'We clean the house on Sundays.', 'Chúng tôi dọn nhà vào Chủ nhật.'],
        ['tidy', 'gọn gàng', 'Please keep your room tidy.', 'Hãy giữ phòng của bạn gọn gàng.'],
        ['messy', 'bừa bộn', 'Your desk is messy.', 'Bàn của bạn bừa bộn quá.'],
        ['wash the dishes', 'rửa bát', 'I wash the dishes after dinner.', 'Tôi rửa bát sau bữa tối.'],
        ['do the laundry', 'giặt quần áo', 'She does the laundry on Saturday.', 'Cô ấy giặt quần áo vào thứ Bảy.'],
        ['rent', 'thuê; tiền thuê', 'We rent a small apartment.', 'Chúng tôi thuê một căn hộ nhỏ.'],
        ['neighbor', 'hàng xóm', 'Our neighbor is very kind.', 'Hàng xóm của chúng tôi rất tử tế.'],
        ['address', 'địa chỉ', 'What is your new address?', 'Địa chỉ mới của bạn là gì?'],
      ],
      patterns: [
        ['There are three bedrooms and two bathrooms in my house.', 'Nhà tôi có ba phòng ngủ và hai phòng tắm.'],
        ['The sofa is in front of the television.', 'Ghế sofa ở trước tivi.'],
        ['Could you please open the window? It is very hot.', 'Bạn mở giúp tôi cửa sổ được không? Trời nóng quá.'],
        ['I clean my room every weekend.', 'Tôi dọn phòng mỗi cuối tuần.'],
        ['Where is the bathroom, please?', 'Phòng tắm ở đâu vậy ạ?'],
      ],
      dialogue: [
        ['A', 'Welcome to my new apartment!', 'Chào mừng đến căn hộ mới của tôi!'],
        ['B', 'It is lovely. How many rooms are there?', 'Đẹp quá. Có bao nhiêu phòng vậy?'],
        ['A', 'Two bedrooms, a living room and a small kitchen.', 'Hai phòng ngủ, một phòng khách và một bếp nhỏ.'],
        ['B', 'Do you have a balcony?', 'Bạn có ban công không?'],
        ['A', 'Yes, it is next to the living room. I put some plants there.', 'Có, nó ở cạnh phòng khách. Tôi để vài chậu cây ở đó.'],
        ['B', 'That sounds nice. I love plants.', 'Nghe thích quá. Tôi yêu cây cối.'],
      ],
    },
    {
      id: 'the-thao-giai-tri', title: 'Thể thao & giải trí', icon: '⚽', level: 'A2',
      desc: 'Môn thể thao, trò chơi, phim ảnh, âm nhạc và hoạt động cuối tuần.',
      words: [
        ['sport', 'môn thể thao', 'What sport do you like?', 'Bạn thích môn thể thao nào?'],
        ['football', 'bóng đá', 'We play football every Sunday.', 'Chúng tôi chơi bóng đá mỗi Chủ nhật.'],
        ['basketball', 'bóng rổ', 'He is good at basketball.', 'Anh ấy chơi bóng rổ giỏi.'],
        ['badminton', 'cầu lông', 'Let us play badminton.', 'Chúng ta chơi cầu lông nhé.'],
        ['tennis', 'quần vợt', 'She plays tennis twice a week.', 'Cô ấy chơi quần vợt hai lần mỗi tuần.'],
        ['volleyball', 'bóng chuyền', 'Volleyball is a team sport.', 'Bóng chuyền là môn thể thao đồng đội.'],
        ['swimming', 'bơi lội', 'Swimming is good for your health.', 'Bơi lội tốt cho sức khỏe.'],
        ['running', 'chạy bộ', 'I go running in the morning.', 'Tôi đi chạy bộ vào buổi sáng.'],
        ['cycling', 'đạp xe', 'Cycling is fun.', 'Đạp xe rất vui.'],
        ['yoga', 'yoga', 'She does yoga every day.', 'Cô ấy tập yoga mỗi ngày.'],
        ['gym', 'phòng tập gym', 'I go to the gym after work.', 'Tôi đến phòng tập sau giờ làm.'],
        ['match', 'trận đấu', 'The match starts at eight.', 'Trận đấu bắt đầu lúc tám giờ.'],
        ['team', 'đội', 'Our team won the game.', 'Đội của chúng tôi thắng trận.'],
        ['player', 'cầu thủ, người chơi', 'He is a famous player.', 'Anh ấy là một cầu thủ nổi tiếng.'],
        ['coach', 'huấn luyện viên', 'The coach is very strict.', 'Huấn luyện viên rất nghiêm khắc.'],
        ['fan', 'người hâm mộ', 'I am a big fan of this team.', 'Tôi là fan lớn của đội này.'],
        ['win', 'thắng', 'We hope to win.', 'Chúng tôi hy vọng sẽ thắng.'],
        ['lose', 'thua', 'They lost the final.', 'Họ đã thua trận chung kết.'],
        ['score', 'ghi bàn; tỷ số', 'He scored two goals.', 'Anh ấy ghi hai bàn.'],
        ['goal', 'bàn thắng', 'What a beautiful goal!', 'Một bàn thắng thật đẹp!'],
        ['ball', 'quả bóng', 'Pass me the ball.', 'Chuyền bóng cho tôi.'],
        ['stadium', 'sân vận động', 'The stadium is full of fans.', 'Sân vận động đầy người hâm mộ.'],
        ['exercise', 'tập thể dục', 'I exercise three times a week.', 'Tôi tập thể dục ba lần mỗi tuần.'],
        ['warm up', 'khởi động', 'Warm up before you run.', 'Hãy khởi động trước khi chạy.'],
        ['hobby', 'sở thích', 'My hobby is photography.', 'Sở thích của tôi là chụp ảnh.'],
        ['free time', 'thời gian rảnh', 'What do you do in your free time?', 'Bạn làm gì trong thời gian rảnh?'],
        ['movie', 'bộ phim', 'Let us watch a movie tonight.', 'Tối nay chúng ta xem phim nhé.'],
        ['cinema', 'rạp chiếu phim', 'We go to the cinema on Fridays.', 'Chúng tôi đi xem phim vào thứ Sáu.'],
        ['comedy', 'phim hài', 'I like comedies.', 'Tôi thích phim hài.'],
        ['action', 'phim hành động', 'He loves action movies.', 'Anh ấy thích phim hành động.'],
        ['music', 'âm nhạc', 'I listen to music on the bus.', 'Tôi nghe nhạc trên xe buýt.'],
        ['song', 'bài hát', 'This is my favorite song.', 'Đây là bài hát yêu thích của tôi.'],
        ['concert', 'buổi hòa nhạc', 'We went to a concert last night.', 'Tối qua chúng tôi đi xem hòa nhạc.'],
        ['guitar', 'đàn ghi-ta', 'He plays the guitar well.', 'Anh ấy chơi ghi-ta giỏi.'],
        ['piano', 'đàn piano', 'She is learning the piano.', 'Cô ấy đang học đàn piano.'],
        ['sing', 'hát', 'I like to sing in the shower.', 'Tôi thích hát khi tắm.'],
        ['dance', 'khiêu vũ, nhảy', 'They dance very well.', 'Họ nhảy rất giỏi.'],
        ['draw', 'vẽ', 'My sister likes to draw.', 'Em gái tôi thích vẽ.'],
        ['paint', 'sơn, vẽ màu', 'He paints beautiful pictures.', 'Anh ấy vẽ những bức tranh đẹp.'],
        ['read', 'đọc', 'I read a book every week.', 'Tôi đọc một cuốn sách mỗi tuần.'],
        ['game', 'trò chơi', 'We played a board game.', 'Chúng tôi chơi một trò chơi cờ bàn.'],
        ['video game', 'trò chơi điện tử', 'He plays video games after school.', 'Cậu ấy chơi trò chơi điện tử sau giờ học.'],
        ['chess', 'cờ vua', 'My grandfather plays chess.', 'Ông tôi chơi cờ vua.'],
        ['camping', 'cắm trại', 'We go camping in summer.', 'Chúng tôi đi cắm trại vào mùa hè.'],
        ['fishing', 'câu cá', 'Fishing is relaxing.', 'Câu cá rất thư giãn.'],
        ['picnic', 'buổi dã ngoại', 'Let us have a picnic in the park.', 'Chúng ta đi dã ngoại ở công viên nhé.'],
        ['party', 'bữa tiệc', 'Are you coming to the party?', 'Bạn có đến bữa tiệc không?'],
        ['join', 'tham gia', 'Do you want to join us?', 'Bạn có muốn tham gia cùng chúng tôi không?'],
        ['enjoy', 'tận hưởng', 'I enjoy playing with my friends.', 'Tôi thích chơi với bạn bè.'],
        ['weekend', 'cuối tuần', 'What are you doing this weekend?', 'Cuối tuần này bạn làm gì?'],
      ],
      patterns: [
        ['What do you like to do in your free time?', 'Bạn thích làm gì trong thời gian rảnh?'],
        ['I play football with my friends every Sunday.', 'Tôi chơi bóng đá với bạn bè mỗi Chủ nhật.'],
        ['Do you want to go to the cinema with me?', 'Bạn có muốn đi xem phim với tôi không?'],
        ['She is very good at swimming.', 'Cô ấy bơi rất giỏi.'],
        ['Our team won the match three to one.', 'Đội chúng tôi thắng trận với tỷ số ba một.'],
      ],
      dialogue: [
        ['A', 'What are you doing this weekend?', 'Cuối tuần này bạn làm gì?'],
        ['B', 'I am going to play badminton with my brother.', 'Tôi sẽ chơi cầu lông với anh trai.'],
        ['A', 'Can I join you?', 'Tôi tham gia cùng được không?'],
        ['B', 'Of course! We meet at the sports center at nine.', 'Tất nhiên! Chúng tôi gặp nhau ở trung tâm thể thao lúc chín giờ.'],
        ['A', 'Great. After that, shall we watch a movie?', 'Tuyệt. Sau đó mình đi xem phim nhé?'],
        ['B', 'Good idea. I love comedies.', 'Ý hay đấy. Tôi thích phim hài.'],
      ],
    },
    {
      id: 'truong-hoc', title: 'Trường học & lớp học', icon: '🏫', level: 'A2',
      desc: 'Môn học, đồ dùng học tập, thời khóa biểu và hoạt động trong lớp.',
      words: [
        ['school', 'trường học', 'I go to school by bike.', 'Tôi đi học bằng xe đạp.'],
        ['classroom', 'lớp học', 'The classroom is on the second floor.', 'Lớp học ở tầng hai.'],
        ['teacher', 'giáo viên', 'Our teacher is friendly.', 'Giáo viên của chúng tôi rất thân thiện.'],
        ['student', 'học sinh', 'There are thirty students in my class.', 'Lớp tôi có ba mươi học sinh.'],
        ['classmate', 'bạn cùng lớp', 'My classmate helps me with math.', 'Bạn cùng lớp giúp tôi môn toán.'],
        ['principal', 'hiệu trưởng', 'The principal gave a speech.', 'Hiệu trưởng phát biểu.'],
        ['subject', 'môn học', 'My favorite subject is English.', 'Môn học yêu thích của tôi là tiếng Anh.'],
        ['math', 'môn toán', 'Math is difficult for me.', 'Toán khó với tôi.'],
        ['science', 'môn khoa học', 'We do experiments in science.', 'Chúng tôi làm thí nghiệm trong giờ khoa học.'],
        ['history', 'môn lịch sử', 'I like history because of the stories.', 'Tôi thích lịch sử vì những câu chuyện.'],
        ['geography', 'môn địa lý', 'Geography is about countries and maps.', 'Địa lý nói về các quốc gia và bản đồ.'],
        ['literature', 'môn văn học', 'We read a poem in literature class.', 'Chúng tôi đọc một bài thơ trong giờ văn học.'],
        ['art', 'môn mỹ thuật', 'We paint in art class.', 'Chúng tôi vẽ trong giờ mỹ thuật.'],
        ['physical education', 'môn thể dục', 'Physical education is my favorite class.', 'Thể dục là môn tôi yêu thích.'],
        ['lesson', 'bài học', 'Today\'s lesson is about animals.', 'Bài học hôm nay nói về động vật.'],
        ['homework', 'bài tập về nhà', 'I have a lot of homework tonight.', 'Tối nay tôi có nhiều bài tập về nhà.'],
        ['exam', 'kỳ thi', 'The exam is next Monday.', 'Kỳ thi vào thứ Hai tuần sau.'],
        ['test', 'bài kiểm tra', 'We have a spelling test today.', 'Hôm nay chúng tôi có bài kiểm tra chính tả.'],
        ['grade', 'điểm số', 'She got a good grade.', 'Cô ấy được điểm tốt.'],
        ['timetable', 'thời khóa biểu', 'Check the timetable for tomorrow.', 'Hãy xem thời khóa biểu ngày mai.'],
        ['break', 'giờ nghỉ', 'We play outside during the break.', 'Chúng tôi chơi ngoài sân trong giờ nghỉ.'],
        ['lunch', 'bữa trưa', 'We have lunch at the canteen.', 'Chúng tôi ăn trưa ở căng tin.'],
        ['canteen', 'căng tin', 'The canteen is very crowded.', 'Căng tin rất đông.'],
        ['library', 'thư viện', 'I borrow books from the library.', 'Tôi mượn sách ở thư viện.'],
        ['playground', 'sân chơi', 'The children are in the playground.', 'Bọn trẻ đang ở sân chơi.'],
        ['uniform', 'đồng phục', 'We wear a uniform to school.', 'Chúng tôi mặc đồng phục đến trường.'],
        ['desk', 'bàn học', 'My desk is near the window.', 'Bàn học của tôi ở gần cửa sổ.'],
        ['blackboard', 'bảng đen', 'The teacher writes on the blackboard.', 'Giáo viên viết lên bảng đen.'],
        ['whiteboard', 'bảng trắng', 'Please read the whiteboard.', 'Vui lòng đọc bảng trắng.'],
        ['notebook', 'quyển vở', 'Write the answer in your notebook.', 'Viết đáp án vào quyển vở của em.'],
        ['textbook', 'sách giáo khoa', 'Open your textbook to page ten.', 'Mở sách giáo khoa trang mười.'],
        ['pencil', 'bút chì', 'I need a pencil.', 'Tôi cần một cây bút chì.'],
        ['pen', 'bút mực', 'Can I borrow your pen?', 'Tôi mượn bút của bạn được không?'],
        ['eraser', 'cục tẩy', 'Use an eraser to fix the mistake.', 'Dùng cục tẩy để sửa lỗi.'],
        ['ruler', 'thước kẻ', 'Draw a line with a ruler.', 'Vẽ một đường bằng thước.'],
        ['backpack', 'ba lô', 'My backpack is very heavy.', 'Ba lô của tôi rất nặng.'],
        ['dictionary', 'từ điển', 'Look it up in the dictionary.', 'Hãy tra từ điển.'],
        ['question', 'câu hỏi', 'Can I ask a question?', 'Em hỏi một câu được không ạ?'],
        ['answer', 'câu trả lời', 'What is the answer?', 'Đáp án là gì?'],
        ['mistake', 'lỗi sai', 'I made a mistake.', 'Tôi đã mắc một lỗi.'],
        ['correct', 'đúng; sửa', 'Your answer is correct.', 'Câu trả lời của em đúng.'],
        ['practice', 'luyện tập', 'We practice English every day.', 'Chúng tôi luyện tiếng Anh mỗi ngày.'],
        ['learn', 'học', 'I learn ten new words every day.', 'Tôi học mười từ mới mỗi ngày.'],
        ['study', 'học bài', 'I study in the evening.', 'Tôi học bài vào buổi tối.'],
        ['listen', 'lắng nghe', 'Listen carefully to the teacher.', 'Hãy chú ý nghe giáo viên.'],
        ['repeat', 'nhắc lại', 'Please repeat after me.', 'Hãy nhắc lại theo cô.'],
        ['spell', 'đánh vần', 'How do you spell your name?', 'Tên bạn đánh vần thế nào?'],
        ['pass', 'đậu', 'I hope to pass the exam.', 'Tôi hy vọng đậu kỳ thi.'],
        ['graduate', 'tốt nghiệp', 'She will graduate next year.', 'Năm sau cô ấy sẽ tốt nghiệp.'],
        ['university', 'trường đại học', 'He studies at a university in Hanoi.', 'Anh ấy học ở một trường đại học ở Hà Nội.'],
      ],
      patterns: [
        ['What is your favorite subject at school?', 'Môn học yêu thích của bạn ở trường là gì?'],
        ['We have English class on Monday and Thursday.', 'Chúng tôi có tiết tiếng Anh vào thứ Hai và thứ Năm.'],
        ['Could you repeat the question, please?', 'Cô nhắc lại câu hỏi được không ạ?'],
        ['I forgot my homework at home.', 'Em quên bài tập về nhà ở nhà rồi.'],
        ['Open your books to page twenty.', 'Hãy mở sách ra trang hai mươi.'],
      ],
      dialogue: [
        ['Teacher', 'Good morning, class. Please open your textbooks.', 'Chào các em. Hãy mở sách giáo khoa ra.'],
        ['Student', 'Excuse me, teacher. I forgot my book.', 'Thưa cô, em quên sách ạ.'],
        ['Teacher', 'You can share with your classmate.', 'Em có thể xem chung với bạn bên cạnh.'],
        ['Student', 'Thank you. Can I ask a question?', 'Em cảm ơn. Em hỏi một câu được không ạ?'],
        ['Teacher', 'Of course. What is it?', 'Tất nhiên. Em hỏi đi.'],
        ['Student', 'How do you spell "library"?', 'Từ "library" đánh vần thế nào ạ?'],
      ],
    },
    {
      id: 'nau-an', title: 'Nấu ăn & công thức', icon: '🍳', level: 'A2',
      desc: 'Nguyên liệu, dụng cụ nấu bếp, cách chế biến và đọc công thức.',
      words: [
        ['cook', 'nấu ăn', 'I cook dinner for my family.', 'Tôi nấu bữa tối cho gia đình.'],
        ['recipe', 'công thức nấu ăn', 'This recipe is easy.', 'Công thức này dễ làm.'],
        ['ingredient', 'nguyên liệu', 'You need five ingredients.', 'Bạn cần năm nguyên liệu.'],
        ['meat', 'thịt', 'We buy fresh meat at the market.', 'Chúng tôi mua thịt tươi ở chợ.'],
        ['chicken', 'thịt gà', 'I like fried chicken.', 'Tôi thích gà rán.'],
        ['beef', 'thịt bò', 'Beef soup is my favorite.', 'Súp bò là món tôi thích nhất.'],
        ['pork', 'thịt lợn', 'We cook pork with rice.', 'Chúng tôi nấu thịt lợn với cơm.'],
        ['fish', 'cá', 'Grilled fish is healthy.', 'Cá nướng tốt cho sức khỏe.'],
        ['egg', 'trứng', 'I eat two eggs for breakfast.', 'Tôi ăn hai quả trứng vào bữa sáng.'],
        ['vegetable', 'rau củ', 'Eat more vegetables.', 'Hãy ăn nhiều rau củ hơn.'],
        ['carrot', 'cà rốt', 'Cut the carrot into small pieces.', 'Cắt cà rốt thành miếng nhỏ.'],
        ['potato', 'khoai tây', 'I like boiled potatoes.', 'Tôi thích khoai tây luộc.'],
        ['onion', 'hành tây', 'Chop the onion.', 'Thái hành tây ra.'],
        ['garlic', 'tỏi', 'Add some garlic.', 'Thêm một chút tỏi.'],
        ['tomato', 'cà chua', 'The tomatoes are red and sweet.', 'Cà chua đỏ và ngọt.'],
        ['cabbage', 'bắp cải', 'We make soup with cabbage.', 'Chúng tôi nấu canh với bắp cải.'],
        ['fruit', 'trái cây', 'I eat fruit every day.', 'Tôi ăn trái cây mỗi ngày.'],
        ['butter', 'bơ', 'Spread butter on the bread.', 'Phết bơ lên bánh mì.'],
        ['flour', 'bột mì', 'Mix the flour and water.', 'Trộn bột mì với nước.'],
        ['oil', 'dầu ăn', 'Heat some oil in the pan.', 'Đun nóng chút dầu trong chảo.'],
        ['salt', 'muối', 'Add a little salt.', 'Thêm một chút muối.'],
        ['sugar', 'đường', 'I do not take sugar in my tea.', 'Tôi không cho đường vào trà.'],
        ['spice', 'gia vị', 'This dish has many spices.', 'Món này có nhiều gia vị.'],
        ['pan', 'cái chảo', 'Put the fish in the pan.', 'Cho cá vào chảo.'],
        ['pot', 'cái nồi', 'Boil water in a large pot.', 'Đun sôi nước trong cái nồi lớn.'],
        ['knife', 'con dao', 'Be careful with the knife.', 'Hãy cẩn thận với con dao.'],
        ['cutting board', 'thớt', 'Cut the vegetables on the cutting board.', 'Cắt rau trên thớt.'],
        ['bowl', 'cái tô', 'Put the eggs in a bowl.', 'Cho trứng vào một cái tô.'],
        ['spoon', 'cái muỗng', 'Stir with a spoon.', 'Khuấy bằng muỗng.'],
        ['cup', 'cái cốc', 'Add one cup of water.', 'Thêm một cốc nước.'],
        ['tablespoon', 'muỗng canh', 'Add two tablespoons of sugar.', 'Thêm hai muỗng canh đường.'],
        ['teaspoon', 'muỗng cà phê', 'Add one teaspoon of salt.', 'Thêm một muỗng cà phê muối.'],
        ['wash', 'rửa', 'Wash the vegetables first.', 'Rửa rau trước.'],
        ['peel', 'gọt vỏ', 'Peel the potatoes.', 'Gọt vỏ khoai tây.'],
        ['cut', 'cắt', 'Cut the meat into small pieces.', 'Cắt thịt thành miếng nhỏ.'],
        ['chop', 'thái nhỏ', 'Chop the garlic finely.', 'Băm tỏi thật nhỏ.'],
        ['slice', 'thái lát', 'Slice the tomatoes.', 'Thái cà chua thành lát.'],
        ['mix', 'trộn', 'Mix all the ingredients.', 'Trộn tất cả nguyên liệu.'],
        ['stir', 'khuấy', 'Stir the soup slowly.', 'Khuấy súp từ từ.'],
        ['boil', 'đun sôi, luộc', 'Boil the eggs for ten minutes.', 'Luộc trứng trong mười phút.'],
        ['fry', 'chiên, rán', 'Fry the onion until it is golden.', 'Chiên hành đến khi vàng.'],
        ['bake', 'nướng (lò)', 'Bake the cake for thirty minutes.', 'Nướng bánh trong ba mươi phút.'],
        ['grill', 'nướng (vỉ)', 'We grill fish outside.', 'Chúng tôi nướng cá ngoài trời.'],
        ['steam', 'hấp', 'Steam the vegetables for five minutes.', 'Hấp rau trong năm phút.'],
        ['pour', 'rót, đổ', 'Pour the milk into the bowl.', 'Đổ sữa vào tô.'],
        ['add', 'thêm vào', 'Add some water.', 'Thêm một chút nước.'],
        ['heat', 'làm nóng', 'Heat the oil first.', 'Làm nóng dầu trước.'],
        ['serve', 'dọn ra, phục vụ', 'Serve the soup hot.', 'Dọn súp khi còn nóng.'],
        ['delicious', 'ngon', 'This soup is delicious.', 'Món súp này ngon quá.'],
        ['taste', 'nếm; vị', 'Taste the soup before you serve it.', 'Hãy nếm súp trước khi dọn ra.'],
      ],
      patterns: [
        ['First, wash and peel the potatoes.', 'Đầu tiên, rửa và gọt vỏ khoai tây.'],
        ['Add two tablespoons of oil to the hot pan.', 'Cho hai muỗng canh dầu vào chảo nóng.'],
        ['Boil the water, then add the noodles.', 'Đun sôi nước rồi cho mì vào.'],
        ['Cook for ten minutes over low heat.', 'Nấu mười phút với lửa nhỏ.'],
        ['Can you give me the recipe for this dish?', 'Bạn cho tôi công thức món này được không?'],
      ],
      dialogue: [
        ['A', 'This soup is delicious. How did you make it?', 'Món súp này ngon quá. Bạn nấu thế nào vậy?'],
        ['B', 'It is easy. First, I fry the onion and garlic.', 'Dễ thôi. Đầu tiên tôi phi hành và tỏi.'],
        ['A', 'And then?', 'Rồi sao nữa?'],
        ['B', 'I add chicken, carrots and water, and boil it for thirty minutes.', 'Tôi cho thịt gà, cà rốt và nước, rồi đun sôi ba mươi phút.'],
        ['A', 'Do you add salt?', 'Bạn có cho muối không?'],
        ['B', 'Yes, a little salt and pepper at the end.', 'Có, một chút muối và tiêu ở cuối.'],
      ],
    },
  ],
  reads: {
    'nha-cua': {
      title: 'My Dream House',
      text: 'My dream house is not very big, but it is comfortable and bright. It has two floors. On the ground floor there is a large living room with a soft sofa and a television. Next to it is the kitchen, where I want a big fridge and a new stove. Upstairs there are three bedrooms and two bathrooms. My bedroom has a wide window, so the morning sun comes in. I also want a small garden with flowers and a table for drinking tea in the evening. Every weekend, my family can clean the house together and have lunch in the garden. For me, a good home is a clean and tidy place where everyone feels happy.',
      vi: 'Ngôi nhà mơ ước có hai tầng, phòng khách, bếp, ba phòng ngủ, hai phòng tắm và một khu vườn nhỏ.',
      qs: [
        ['How many floors does the dream house have?', ['One', 'Two', 'Three', 'Four'], 1],
        ['What does the writer want in the kitchen?', ['A big fridge and a new stove', 'A television', 'A sofa', 'A garden table'], 0],
        ['What does the family do at the weekend?', ['They travel abroad.', 'They clean the house and have lunch in the garden.', 'They paint the walls.', 'They sell the house.'], 1],
      ],
    },
    'the-thao-giai-tri': {
      title: 'A Busy Weekend',
      text: 'Tom loves sports and music, so his weekends are always busy. On Saturday morning, he plays football with his friends at the stadium near his house. His team usually wins, and everyone is happy. In the afternoon he goes swimming for an hour. In the evening he plays the guitar and sings with his brother. On Sunday, Tom likes to relax. He often goes to the cinema with his sister to watch a comedy, and they eat popcorn together. Sometimes they have a picnic in the park with their friends. Tom says that doing sports and enjoying hobbies makes him healthy and happy.',
      vi: 'Cuối tuần của Tom đầy ắp: đá bóng, bơi, chơi ghi-ta, xem phim và dã ngoại.',
      qs: [
        ['What does Tom do on Saturday morning?', ['He goes swimming.', 'He plays football.', 'He plays the guitar.', 'He watches a movie.'], 1],
        ['Who does Tom play the guitar with?', ['His sister', 'His friends', 'His brother', 'His teacher'], 2],
        ['What does Tom do at the cinema?', ['He watches a comedy.', 'He plays a game.', 'He sings.', 'He cooks.'], 0],
      ],
    },
    'truong-hoc': {
      title: 'A Day at School',
      text: 'Lan is a student at a secondary school. Her classes start at seven in the morning. Today she has math, English and science before the break. At nine thirty, the bell rings and everyone goes to the playground. Lan and her classmates talk, play and eat snacks. After the break, they have a history lesson and then a literature lesson. At twelve, they have lunch at the canteen. In the afternoon, Lan goes to the library to do her homework and borrow a book. She likes school because her teachers are kind and she has many friends. On Friday, she has a test in English, so she studies her new words carefully.',
      vi: 'Một ngày ở trường của Lan: các tiết học, giờ nghỉ ở sân chơi, ăn trưa ở căng tin và làm bài tập ở thư viện.',
      qs: [
        ['What time do Lan\'s classes start?', ['Six', 'Seven', 'Eight', 'Nine'], 1],
        ['Where do students go at the break?', ['The library', 'The canteen', 'The playground', 'The classroom'], 2],
        ['What test does Lan have on Friday?', ['Math', 'English', 'Science', 'History'], 1],
      ],
    },
    'nau-an': {
      title: 'How to Make Fried Rice',
      text: 'Fried rice is a simple dish that everyone can cook at home. You need cooked rice, two eggs, some carrots, an onion, a little garlic, oil, salt and soy sauce. First, wash and cut the carrots and the onion into small pieces. Then heat two tablespoons of oil in a large pan and fry the garlic and onion for one minute. Add the carrots and stir for three minutes. Push the vegetables to one side of the pan, pour in the eggs and mix them quickly. Finally, add the rice, a little salt and some soy sauce. Stir everything together for five minutes. Taste the rice and serve it hot with fresh cucumber.',
      vi: 'Công thức cơm chiên: cắt rau, phi hành tỏi, xào cà rốt, thêm trứng, cho cơm và gia vị rồi đảo đều năm phút.',
      qs: [
        ['What do you do first?', ['Add the rice.', 'Wash and cut the carrots and onion.', 'Pour in the eggs.', 'Serve the rice.'], 1],
        ['How long do you stir the carrots?', ['One minute', 'Three minutes', 'Five minutes', 'Ten minutes'], 1],
        ['What do you serve the rice with?', ['Fresh cucumber', 'Cheese', 'Butter', 'Ice cream'], 0],
      ],
    },
  },
  defs: `
house = a building where people live
apartment = a set of rooms for living in, on one floor of a building
room = a part of a building with walls and a door
living room = the room where people sit and relax
bedroom = a room for sleeping
bathroom = a room with a bath or shower
kitchen = a room where food is cooked
garden = a piece of ground with plants, near a house
balcony = a small platform outside an upstairs window
garage = a building or room for keeping a car
floor = the surface you walk on inside a building
wall = a side of a room or building
ceiling = the inside surface at the top of a room
door = a piece of wood or glass that opens and closes an entrance
window = an opening in a wall with glass in it
stairs = a set of steps from one floor to another
furniture = things like tables and beds in a room
table = a piece of furniture with a flat top and legs
chair = a seat for one person
sofa = a long soft seat for two or more people
bed = a piece of furniture for sleeping on
wardrobe = a tall cupboard for clothes
shelf = a flat board fixed to a wall for holding things
desk = a table where you read or write
lamp = a light you can move
curtain = cloth that hangs at a window
carpet = thick cloth that covers a floor
mirror = glass in which you can see yourself
pillow = a soft bag for your head in bed
blanket = a thick cover for a bed
fridge = a machine that keeps food cold
stove = a cooker with places to heat pans
oven = a closed box for baking food
microwave = an oven that cooks food very quickly
washing machine = a machine for washing clothes
air conditioner = a machine that makes a room cool
fan = a machine that moves air to make you cool
bathtub = a long container you fill with water to wash in
shower = a device that sprays water to wash your body
towel = a piece of cloth for drying your body
soap = something you use with water to wash
broom = a brush with a long handle for sweeping
clean = to remove dirt from something
tidy = neat and in good order
messy = untidy and dirty
wash the dishes = to clean plates and cups after a meal
do the laundry = to wash clothes
rent = to pay to use a house that belongs to someone else
neighbor = a person who lives next to you
address = the details of where someone lives
sport = a physical game played for fun or competition
football = a game in which two teams kick a ball
basketball = a game in which players throw a ball into a net
badminton = a game played with rackets and a shuttlecock
tennis = a game played with rackets and a ball over a net
volleyball = a game in which teams hit a ball over a net
swimming = moving through water using your arms and legs
running = moving fast on foot
cycling = riding a bicycle
yoga = exercises for the body and mind
gym = a place with equipment for exercise
match = a sports game between two teams
team = a group of people who play or work together
player = a person who plays a game
coach = a person who trains a sports team
fan = a person who admires a team or singer
win = to be the best in a game
lose = to fail to win
score = to get a point in a game
goal = the point scored in football
ball = a round object used in games
stadium = a large place where sports are played
exercise = physical activity to keep healthy
warm up = to prepare your body with gentle exercise
hobby = something you like doing in your free time
free time = time when you are not working
movie = a story shown on a screen
cinema = a place where you go to watch films
comedy = a funny film or play
action = a film with exciting fights or chases
music = sounds made by instruments or voices
song = words and music that are sung
concert = a performance of music
guitar = a musical instrument with strings
piano = a large musical instrument with keys
sing = to make music with your voice
dance = to move your body to music
draw = to make a picture with a pencil
paint = to make a picture with colors
read = to look at words and understand them
game = an activity with rules, played for fun
video game = a game played on a screen
chess = a board game for two players
camping = sleeping outdoors in a tent
fishing = catching fish
picnic = a meal eaten outdoors
party = a social event with food and music
join = to become part of a group
enjoy = to get pleasure from something
weekend = Saturday and Sunday
school = a place where children learn
classroom = a room in a school where lessons happen
teacher = a person who helps others to learn
student = a person who studies at a school
classmate = a person in the same class as you
principal = the head of a school
subject = a topic studied at school
math = the study of numbers and shapes
science = the study of nature and the world
history = the study of the past
geography = the study of countries and the earth
literature = books, poems and plays
art = drawing, painting and making things
physical education = lessons about sport and exercise
lesson = a period of time when you learn something
homework = school work done at home
exam = a formal test
test = a short exam
grade = a mark for school work
timetable = a list of lessons and times
break = a short rest between lessons
lunch = the meal eaten in the middle of the day
canteen = a place in a school where you can eat
library = a place where books are kept
playground = an area where children play
uniform = special clothes worn by all students
blackboard = a dark board you write on with chalk
whiteboard = a white board you write on with a marker
notebook = a book of empty pages for writing
textbook = a book for studying a subject
pencil = a thin stick for writing and drawing
pen = a tool for writing with ink
eraser = a rubber you use to remove pencil marks
ruler = a flat stick for drawing straight lines
backpack = a bag carried on your back
dictionary = a book that explains the meaning of words
question = something you ask to get information
answer = what you say when someone asks a question
mistake = something wrong that you did
correct = right, without mistakes
practice = to do something again and again to improve
learn = to get knowledge or a skill
study = to spend time learning about a subject
listen = to pay attention to sounds
repeat = to say something again
spell = to say the letters of a word
pass = to succeed in a test
graduate = to finish your studies and get a degree
university = a place where people study for degrees
cook = to prepare food by heating it
recipe = instructions for cooking a dish
ingredient = one of the foods used in a dish
meat = the flesh of animals eaten as food
chicken = a bird kept for its meat and eggs
beef = meat from a cow
pork = meat from a pig
fish = an animal that lives in water, or its meat
egg = an oval food laid by a hen
vegetable = a plant you eat, such as a carrot
carrot = a long orange vegetable
potato = a round vegetable that grows underground
onion = a round vegetable with a strong smell
garlic = a small plant with a strong taste
tomato = a soft red fruit eaten as a vegetable
cabbage = a large round green vegetable
fruit = sweet food that grows on plants, such as apples
butter = a yellow fat made from milk
flour = a powder made from grain, used for bread
oil = a liquid fat used in cooking
salt = a white substance that adds flavor
sugar = a sweet white substance
spice = a strong-tasting powder from plants
pan = a flat metal container for frying
pot = a deep round container for cooking
knife = a tool with a sharp edge for cutting
cutting board = a board you cut food on
bowl = a deep round dish
spoon = a tool with a small bowl for eating
cup = a small container for drinking
tablespoon = a large spoon used for measuring
teaspoon = a small spoon used for measuring
wash = to clean with water
peel = to remove the skin of fruit or vegetables
cut = to divide something with a knife
chop = to cut into small pieces
slice = to cut into thin flat pieces
mix = to combine things together
stir = to move food around with a spoon
boil = to heat a liquid until it bubbles
fry = to cook in hot oil
bake = to cook in an oven
grill = to cook over or under strong heat
steam = to cook food with hot vapor
pour = to make a liquid flow out of a container
add = to put something with something else
heat = to make something hot
serve = to give food to people at a meal
delicious = tasting very good
taste = the flavor of food, or to try the flavor

## ghi đè theo chủ đề (từ có nghĩa khác nhau giữa các chủ đề)
nha-cua|table = a piece of furniture with a flat top and legs
the-thao-giai-tri|fan = a person who admires a team or a performer
the-thao-giai-tri|match = a sports game between two teams
the-thao-giai-tri|goal = a point scored in a game such as football
the-thao-giai-tri|read = to look at words and understand them
nau-an|fruit = sweet food that grows on plants, such as apples and bananas
ky-thuat-phong-lab|tip = the small plastic end of a pipette that touches the liquid
virus-hoc|attachment = the first step when a virus binds to a cell
tin-sinh-hoc|coverage = the average number of times each base is sequenced
hoa-sinh|bond = a connection between atoms in a molecule
tin-sinh-hoc|identity = the percentage of positions that are exactly the same
virus-hoc|replication = the process by which a virus makes copies of itself
mien-dich-hoc|titer = the amount of antibody in a blood sample
virus-hoc|assembly = putting new virus parts together
virus-hoc|vector = a living thing, such as a mosquito, that carries a disease
nuoi-cay-te-bao|scaffold = a structure that supports cells as they grow
`,
};
