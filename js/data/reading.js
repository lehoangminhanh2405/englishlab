// Bài đọc hiểu theo chủ đề: { topicId: { title, text, vi (tóm tắt tiếng Việt), qs: [[câu hỏi, [4 đáp án], chỉ số đáp án đúng]] } }
export const readings = {
  'chao-hoi': {
    title: 'A New Neighbor',
    text: 'Last Sunday, a new family moved into the apartment next to mine. In the afternoon, I knocked on their door and introduced myself. "Hello, my name is Minh. Nice to meet you," I said. The woman smiled and shook my hand. Her name was Anna, and she was from Canada. She works as a teacher at a language school. Her husband is an engineer. They have a small daughter named Lily. Anna invited me in for tea. We talked about our hometowns and our hobbies. I told her I like cooking and playing football. Before I left, she gave me her phone number and said, "Let us keep in touch."',
    vi: 'Minh làm quen với người hàng xóm mới là Anna, giáo viên đến từ Canada, và hai người trao đổi số điện thoại.',
    qs: [
      ['Where is Anna from?', ['Vietnam', 'Canada', 'England', 'Australia'], 1],
      ['What does Anna do?', ['She is an engineer.', 'She is a doctor.', 'She is a teacher.', 'She is a student.'], 2],
      ['What did Anna give Minh before he left?', ['Some tea', 'Her address', 'A gift', 'Her phone number'], 3],
    ],
  },
  'gia-dinh': {
    title: 'My Family on Sundays',
    text: 'There are five people in my family: my parents, my older brother, my younger sister and me. We live in a small house in Hue. My father is a driver, and my mother works in a bank. On weekdays everyone is busy, so we only have time to talk at night. But on Sundays, we have a family dinner together. My mother cooks the food and my sister helps her. My brother and I wash the dishes afterwards. Sometimes my grandparents come from the countryside to join us. I think these dinners are the best part of the week because we are all close and happy.',
    vi: 'Gia đình năm người, bận rộn các ngày trong tuần nhưng luôn ăn tối cùng nhau vào Chủ nhật.',
    qs: [
      ['How many people are there in the writer\'s family?', ['Four', 'Five', 'Six', 'Seven'], 1],
      ['What does the writer\'s mother do?', ['She is a driver.', 'She is a teacher.', 'She works in a bank.', 'She is a cook.'], 2],
      ['When does the family have dinner together?', ['Every night', 'On Saturdays', 'On Sundays', 'On weekdays'], 2],
    ],
  },
  'mua-sam': {
    title: 'A Shopping Trip',
    text: 'Linh went to the mall on Saturday because her friend\'s birthday was coming up. She wanted to buy a nice shirt for herself and a gift for her friend. In the first shop, she found a blue shirt, but it was too expensive. In the second shop, there was a big sale, and the same style cost half the price. She tried it on, and it fitted perfectly. Then she bought a small bag as a gift. At the cashier, she paid by card and kept the receipt. On the way home she felt happy because she had saved a lot of money.',
    vi: 'Linh đi mua áo và quà sinh nhật, tìm được áo giảm giá một nửa ở cửa hàng thứ hai.',
    qs: [
      ['Why did Linh go shopping?', ['She needed shoes.', 'She wanted a gift and a shirt.', 'She was bored.', 'She had a discount card.'], 1],
      ['Why didn\'t she buy the shirt in the first shop?', ['It was too small.', 'It was out of stock.', 'It was too expensive.', 'She did not like the color.'], 2],
      ['How did Linh pay?', ['By cash', 'By card', 'By phone', 'She did not pay.'], 1],
    ],
  },
  'nha-hang': {
    title: 'Dinner at a Seafood Restaurant',
    text: 'On Friday evening, Nam took his parents to a seafood restaurant to celebrate his mother\'s birthday. He had reserved a table by the window. The waiter gave them the menu and recommended the grilled fish, which was the restaurant\'s specialty. Nam\'s father ordered fried rice, while his mother chose a vegetable soup because she does not like spicy food. Nam is allergic to shrimp, so he told the waiter about it. The food was delicious and fresh. After dessert, Nam asked for the bill and left a ten percent tip. His mother said it was the best birthday dinner ever.',
    vi: 'Nam đưa bố mẹ đi ăn hải sản mừng sinh nhật mẹ; anh dặn nhà hàng vì bị dị ứng tôm.',
    qs: [
      ['What was the occasion?', ['Nam\'s birthday', 'His mother\'s birthday', 'His father\'s promotion', 'An anniversary'], 1],
      ['Why does Nam tell the waiter about shrimp?', ['He dislikes it.', 'It is too expensive.', 'He is allergic to it.', 'It is not fresh.'], 2],
      ['What did Nam leave after the meal?', ['A tip', 'A note', 'A gift', 'Nothing'], 0],
    ],
  },
  'du-lich': {
    title: 'A Weekend in Da Nang',
    text: 'Last month, Hoa and her friends took a weekend trip to Da Nang. Their flight departed at 7 a.m., so they arrived at the airport two hours early. After checking in at the hotel, they went sightseeing. In the morning they visited a famous bridge and a museum. They asked a local woman for directions, and she told them to go straight and turn left at the second corner. In the afternoon they relaxed on the beach. In the evening they tried local noodles at a small restaurant. Before leaving, Hoa bought some souvenirs for her family. She says it was the most relaxing trip of the year.',
    vi: 'Hoa và bạn đi Đà Nẵng cuối tuần: tham quan, hỏi đường, ra biển, ăn mì và mua quà lưu niệm.',
    qs: [
      ['What time did their flight leave?', ['7 a.m.', '9 a.m.', '2 p.m.', '7 p.m.'], 0],
      ['What did they do in the afternoon?', ['Visited a museum', 'Went shopping', 'Relaxed on the beach', 'Took a tour'], 2],
      ['What did Hoa buy at the end?', ['Clothes', 'Souvenirs', 'Food', 'A map'], 1],
    ],
  },
  'cong-viec': {
    title: 'A Busy Week at the Office',
    text: 'This week has been very busy for Tuan\'s team. They have an important project, and the deadline is next Friday. On Monday, the manager held a meeting to discuss the schedule. Everyone agreed that the work was too much for four people, so Tuan proposed hiring two more employees. The manager said he would think about it. Meanwhile, Tuan is responsible for writing the final report and sending it to the client. He plans to finish the draft by Wednesday and then ask his colleagues to review it. If everything goes well, the team will celebrate with lunch on Friday.',
    vi: 'Nhóm của Tuấn bận với dự án có hạn chót thứ Sáu tới; Tuấn đề xuất tuyển thêm người và chịu trách nhiệm báo cáo cuối.',
    qs: [
      ['When is the deadline?', ['This Monday', 'Next Friday', 'Next Wednesday', 'Next month'], 1],
      ['What did Tuan propose?', ['Postponing the project', 'Working at weekends', 'Hiring two more people', 'Changing the client'], 2],
      ['Who will review the draft?', ['The client', 'His colleagues', 'The manager only', 'Nobody'], 1],
    ],
  },
  'suc-khoe': {
    title: 'Visiting the Doctor',
    text: 'Mai woke up on Monday with a sore throat and a high fever. She also had a headache and felt dizzy when she stood up. She decided to make an appointment with her doctor. At the clinic, the doctor checked her temperature and asked about her symptoms. "How long have you felt like this?" he asked. "Since yesterday morning," Mai replied. The doctor said she had the flu. He wrote a prescription for some medicine and told her to take it twice a day after meals. He also advised her to drink plenty of water and rest for three days. Mai bought the medicine at the pharmacy and went home to rest.',
    vi: 'Mai bị cúm, bác sĩ kê thuốc uống hai lần mỗi ngày sau bữa ăn và dặn nghỉ ngơi ba ngày.',
    qs: [
      ['What were Mai\'s symptoms?', ['A cough and a backache', 'A sore throat and a fever', 'A stomachache', 'A toothache'], 1],
      ['What did the doctor say she had?', ['A cold', 'An allergy', 'The flu', 'An infection'], 2],
      ['How should she take the medicine?', ['Once a day', 'Twice a day after meals', 'Three times before meals', 'Only at night'], 1],
    ],
  },
  'thoi-gian': {
    title: 'My Daily Routine',
    text: 'I usually wake up at six o\'clock every morning. First, I brush my teeth and have breakfast with my family at half past six. Then I go to work by bus, which takes about forty minutes. I start work at eight and finish at five. In the evening, I often cook dinner, and sometimes I go jogging in the park. I never go to bed after eleven because I need enough sleep. At the weekend, my routine is different. I get up late, meet my friends, and occasionally we go to the cinema. On Sunday evening, I check my calendar and prepare for the new week.',
    vi: 'Mô tả thói quen hằng ngày: dậy lúc 6 giờ, đi làm bằng xe buýt, tối nấu ăn hoặc chạy bộ, cuối tuần thoải mái hơn.',
    qs: [
      ['What time does the writer have breakfast?', ['6:00', '6:30', '7:00', '8:00'], 1],
      ['How does the writer go to work?', ['By bike', 'On foot', 'By bus', 'By car'], 2],
      ['What does the writer do on Sunday evening?', ['Goes jogging', 'Watches a film', 'Meets friends', 'Checks the calendar'], 3],
    ],
  },
  'su-co-du-lich': {
    title: 'A Trip That Went Wrong',
    text: 'When Lan arrived at the airport in Seoul, she discovered that her luggage had not arrived. She reported it at the airline desk, and the agent apologized for the inconvenience. "We will trace your suitcase and deliver it to your hotel within twenty-four hours," he said. Then another problem appeared: her hotel had overbooked, and there was no room for her. After a long discussion, the manager offered her a free upgrade at another hotel nearby. Lan was tired, but she stayed calm. The next morning her suitcase arrived safely. Looking back, she says the trip taught her to always carry spare clothes in her hand luggage.',
    vi: 'Lan mất hành lý và bị khách sạn đặt quá chỗ ở Seoul, nhưng mọi việc được giải quyết và cô rút kinh nghiệm mang đồ dự phòng.',
    qs: [
      ['What was the first problem Lan had?', ['She missed her flight.', 'Her luggage did not arrive.', 'She lost her passport.', 'Her phone was stolen.'], 1],
      ['What did the hotel manager offer?', ['A refund', 'A free dinner', 'A free upgrade at another hotel', 'A taxi'], 2],
      ['What did Lan learn from the trip?', ['To travel alone', 'To carry spare clothes in hand luggage', 'To avoid hotels', 'To book earlier flights'], 1],
    ],
  },
  'moi-truong': {
    title: 'Small Actions, Big Change',
    text: 'Climate change is one of the biggest problems facing our planet. Rising temperatures cause heatwaves, floods and droughts in many regions. Although governments must take action, individuals can also make a difference. Using public transport instead of cars reduces carbon emissions. Switching off lights and unplugging devices saves energy. Recycling paper and plastic means less waste goes to landfills. Many people now carry reusable bottles and bags to avoid single-use plastic. Volunteers also organize campaigns to clean beaches and plant trees. Experts say that if millions of people change their habits, the effect on the environment will be significant.',
    vi: 'Biến đổi khí hậu là vấn đề lớn; mỗi người có thể góp sức bằng cách đi phương tiện công cộng, tiết kiệm điện, tái chế và tham gia dọn dẹp.',
    qs: [
      ['What does the text say about public transport?', ['It is expensive.', 'It reduces carbon emissions.', 'It causes pollution.', 'It is unreliable.'], 1],
      ['Why do people carry reusable bottles?', ['To save money only', 'To avoid single-use plastic', 'Because it is fashionable', 'Because water is scarce'], 1],
      ['According to experts, what will happen if millions change their habits?', ['Nothing will change.', 'Prices will rise.', 'The effect will be significant.', 'Governments will stop acting.'], 2],
    ],
  },
  'cong-nghe-mxh': {
    title: 'Too Much Screen Time?',
    text: 'Smartphones have become an essential part of our lives. We use them to browse the internet, send messages and share photos on social media. However, many people feel they spend too much time on their screens. One teenager, Khoa, noticed that he checked his notifications more than a hundred times a day. He often felt tired and could not concentrate on his homework. So he decided to limit his screen time. He turned off most notifications, deleted two apps and put his phone away an hour before bed. After two weeks, he slept better and had more energy. Khoa says technology is useful, but we should control it, not let it control us.',
    vi: 'Khoa nhận ra mình dùng điện thoại quá nhiều nên tắt thông báo, xóa ứng dụng và ngủ khỏe hơn.',
    qs: [
      ['How often did Khoa check his notifications?', ['About ten times a day', 'Fifty times a day', 'More than a hundred times a day', 'Once an hour'], 2],
      ['What did he do to limit his screen time?', ['Sold his phone', 'Turned off notifications and deleted apps', 'Quit school', 'Bought a new phone'], 1],
      ['What was the result after two weeks?', ['He felt more tired.', 'He slept better.', 'He lost his friends.', 'He studied less.'], 1],
    ],
  },
  'giao-duc': {
    title: 'Applying for a Scholarship',
    text: 'Applying for a scholarship to study abroad can be both exciting and stressful. First, students must choose a university and check the entry requirements carefully. Most programs ask for a certificate such as IELTS, academic transcripts and a personal statement. The personal statement is crucial because it shows who you are beyond your grades. Many applicants also need two letters from teachers who can describe their ability. Deadlines are strict, so it is wise to start at least six months in advance. Mentors suggest that candidates revise their essays several times and ask others to review them. Although competition is high, persistence and good preparation often lead to success.',
    vi: 'Hướng dẫn xin học bổng du học: chọn trường, chuẩn bị chứng chỉ, bài luận cá nhân, thư giới thiệu và nộp sớm.',
    qs: [
      ['Why is the personal statement important?', ['It replaces the exam.', 'It shows who you are beyond grades.', 'It is short.', 'It is optional.'], 1],
      ['When should students start preparing?', ['One week before', 'One month before', 'At least six months in advance', 'After the deadline'], 2],
      ['What do mentors suggest?', ['Writing the essay once', 'Revising essays several times', 'Avoiding teachers', 'Applying to one school only'], 1],
    ],
  },
  'truyen-thong': {
    title: 'Can We Trust the News?',
    text: 'Nowadays, many people get their news from social media instead of newspapers or television. While this makes information more accessible, it also allows misinformation to spread quickly. Headlines are often written to attract clicks rather than to inform readers. A sensational title may exaggerate a story or leave out important facts. Experts advise readers to check the source of an article, compare it with other reports and look for evidence. Fact-checking websites can also help verify doubtful claims. Journalists, meanwhile, have a responsibility to remain objective and correct their mistakes. In the end, being a critical reader is the best protection against fake news.',
    vi: 'Tin tức trên mạng xã hội lan nhanh nhưng dễ sai lệch; người đọc cần kiểm tra nguồn, đối chiếu và đọc có phản biện.',
    qs: [
      ['Why are headlines often sensational?', ['To save space', 'To attract clicks', 'To help journalists', 'To teach readers'], 1],
      ['What do experts advise readers to do?', ['Stop reading news', 'Trust only one source', 'Check sources and compare reports', 'Share quickly'], 2],
      ['What is the best protection against fake news?', ['Censorship', 'Being a critical reader', 'Using more apps', 'Reading headlines only'], 1],
    ],
  },
  'tai-chinh': {
    title: 'Learning to Save',
    text: 'Many young people spend all their income as soon as they receive it. Financial advisers recommend a simple rule: save at least twenty percent of every salary. First, write down your monthly expenses, such as rent, food and utility bills, and then set a budget. Next, open a savings account that pays interest and transfer money into it automatically. It is also wise to build an emergency fund that covers three to six months of living costs. Avoid impulse buying and cancel subscriptions you do not use. If you have debt, pay off the loans with the highest interest rates first. Small steps taken early can create real financial security in the long run.',
    vi: 'Lời khuyên tiết kiệm: để dành ít nhất 20% thu nhập, lập ngân sách, lập quỹ dự phòng, tránh mua bốc đồng và trả nợ lãi cao trước.',
    qs: [
      ['How much of your salary should you save?', ['Five percent', 'Ten percent', 'At least twenty percent', 'Half'], 2],
      ['What should an emergency fund cover?', ['One week of costs', 'Three to six months of living costs', 'A holiday', 'Debt only'], 1],
      ['Which debts should you pay first?', ['Those with the highest interest rate', 'The smallest ones', 'The oldest ones', 'None'], 0],
    ],
  },
  'kinh-doanh-dam-phan': {
    title: 'Closing the Deal',
    text: 'After three weeks of tough negotiations, Hana\'s company and a Japanese supplier finally reached an agreement. At first, the two sides were far apart: the supplier wanted a higher price, while Hana\'s team needed more flexible payment terms. Instead of insisting on their positions, both parties looked for common ground. Hana offered a larger order in exchange for a discount, and the supplier agreed to extend the payment period to sixty days. They also added a clause allowing either side to terminate the contract with three months\' notice. Hana later said that the key to success was preparation: she had researched the market, identified her leverage and planned possible concessions in advance.',
    vi: 'Sau ba tuần đàm phán, hai bên tìm tiếng nói chung: đơn hàng lớn hơn đổi lấy giảm giá và thời hạn thanh toán dài hơn.',
    qs: [
      ['What did the supplier want at first?', ['A lower price', 'A higher price', 'A shorter contract', 'A new client'], 1],
      ['What did Hana offer in exchange for a discount?', ['A larger order', 'Cash payment', 'A longer contract only', 'A partnership'], 0],
      ['What was the key to success according to Hana?', ['Luck', 'Preparation', 'Speed', 'A lawyer'], 1],
    ],
  },
  'tranh-luan': {
    title: 'Is Remote Work Here to Stay?',
    text: 'The shift to remote work has divided opinion. Supporters argue that it saves commuting time, reduces costs and gives employees greater flexibility. Studies suggest that many people are more productive at home because they face fewer interruptions. Critics, however, contend that remote work weakens team spirit and makes communication harder. Younger employees, in particular, may miss the informal learning that happens in an office. A growing number of companies are therefore adopting a hybrid model, in which staff work from home on some days and in the office on others. Admittedly, this approach is not perfect, but it may offer the best compromise between independence and collaboration.',
    vi: 'Làm việc từ xa gây tranh cãi: ưu điểm là linh hoạt và năng suất, nhược điểm là yếu gắn kết; mô hình kết hợp là thỏa hiệp.',
    qs: [
      ['What do supporters of remote work argue?', ['It improves teamwork.', 'It saves time and gives flexibility.', 'It is cheaper for companies only.', 'It is easier for beginners.'], 1],
      ['What may younger employees miss?', ['Higher pay', 'Informal learning in an office', 'Longer holidays', 'Technology'], 1],
      ['What is a hybrid model?', ['Working only in the office', 'Working only at home', 'A mix of home and office work', 'Part-time work'], 2],
    ],
  },
  'xa-hoi-chinh-sach': {
    title: 'The Housing Challenge',
    text: 'In many large cities, rents are rising faster than wages, making it difficult for young people to find affordable housing. The government has introduced several measures, including subsidies for low-income families and incentives for developers to build cheaper apartments. However, critics argue that these policies do not go far enough. They point out that urbanization continues to attract thousands of newcomers every year, increasing pressure on housing and public services such as transport and healthcare. Some experts propose stricter rent controls and greater investment in infrastructure outside city centers. Addressing the issue, they say, requires long-term planning rather than short-term solutions.',
    vi: 'Giá thuê nhà tăng nhanh hơn lương; chính phủ có trợ cấp nhưng các nhà phê bình cho rằng chưa đủ và cần kế hoạch dài hạn.',
    qs: [
      ['What is the main problem described?', ['Falling rents', 'Rents rising faster than wages', 'Too many houses', 'Lack of jobs'], 1],
      ['What do critics say about the government\'s measures?', ['They are too strict.', 'They do not go far enough.', 'They are unnecessary.', 'They work perfectly.'], 1],
      ['What do experts say is needed?', ['Short-term solutions', 'Higher taxes only', 'Long-term planning', 'Fewer newcomers'], 2],
    ],
  },
  'thanh-ngu': {
    title: 'Learning Idioms',
    text: 'Idioms are expressions whose meaning cannot be understood from the individual words. For example, when someone says "It cost an arm and a leg", they do not mean that anyone lost a limb; they mean that something was extremely expensive. English speakers use idioms constantly, so learners who master them sound more natural. However, it is a mistake to translate idioms word for word. A better strategy is to learn them in context, noticing how native speakers use them in conversation. When you hear that a meeting went "back to square one", you understand from the situation that progress was lost. Over time, you will get the hang of it, and these colorful phrases will become part of your own vocabulary.',
    vi: 'Thành ngữ có nghĩa không suy ra từ từng từ; nên học theo ngữ cảnh thay vì dịch từng chữ.',
    qs: [
      ['What does "cost an arm and a leg" mean?', ['To be injured', 'To be extremely expensive', 'To be cheap', 'To be heavy'], 1],
      ['What mistake should learners avoid?', ['Using idioms', 'Translating idioms word for word', 'Listening to natives', 'Learning in context'], 1],
      ['What is a better strategy?', ['Memorizing lists only', 'Learning idioms in context', 'Avoiding idioms', 'Writing them out'], 1],
    ],
  },
  'van-hoa-nghe-thuat': {
    title: 'Why Art Matters',
    text: 'Art has always been an essential part of human culture. From ancient cave paintings to contemporary installations, artists have used their work to express emotions, tell stories and question the society around them. A single painting can reveal how people lived and what they believed centuries ago. Museums therefore play a vital role in preserving cultural heritage for future generations. Some people find abstract art difficult to understand, yet its purpose is not always to depict reality; it often invites viewers to interpret meaning for themselves. Similarly, a thought-provoking film or novel can change the way we see the world. In an age of globalization, art also builds bridges between cultures, helping people appreciate both their differences and their shared humanity.',
    vi: 'Nghệ thuật thể hiện cảm xúc, lưu giữ di sản và kết nối các nền văn hóa trong thời toàn cầu hóa.',
    qs: [
      ['What can a single painting reveal?', ['The price of art', 'How people lived and what they believed', 'The artist\'s salary', 'Modern technology'], 1],
      ['What is the purpose of abstract art, according to the text?', ['To copy reality', 'To invite viewers to interpret meaning', 'To decorate walls', 'To teach history'], 1],
      ['How does art help in an age of globalization?', ['It separates cultures.', 'It builds bridges between cultures.', 'It replaces language.', 'It reduces travel.'], 1],
    ],
  },
  'tu-duy-hoc-thuat': {
    title: 'Thinking Critically',
    text: 'Critical thinking is the ability to analyze information objectively and form a reasoned judgment. It involves questioning assumptions, evaluating evidence and recognizing bias, both in others and in ourselves. A critical thinker does not accept a claim simply because it comes from an authority; instead, they ask whether the reasoning is coherent and whether the conclusion follows from the premises. This skill is particularly valuable in an era of information overload, when ambiguous or misleading statements circulate widely. Nevertheless, critical thinking is not the same as cynicism. It requires intellectual humility: the willingness to revise one\'s views when confronted with stronger evidence. Educators therefore emphasize rigorous inquiry over memorization.',
    vi: 'Tư duy phản biện là phân tích khách quan, đặt nghi vấn về giả định và bằng chứng, đồng thời khiêm tốn sửa quan điểm khi có bằng chứng tốt hơn.',
    qs: [
      ['What does critical thinking involve?', ['Accepting claims from authority', 'Questioning assumptions and evaluating evidence', 'Memorizing facts', 'Avoiding debate'], 1],
      ['Why is it valuable today?', ['There is little information.', 'There is too much information, some of it misleading.', 'Schools no longer teach.', 'Technology is slow.'], 1],
      ['What does it require, apart from analysis?', ['Cynicism', 'Intellectual humility', 'Speed', 'Fame'], 1],
    ],
  },

  // ---------- Công nghệ sinh học ----------
  'te-bao': {
    title: 'Inside a Cell',
    text: 'The cell is the basic unit of life. Every living organism is made of one or more cells. A typical animal cell is surrounded by a cell membrane, which controls the movement of substances in and out. Inside, the nucleus contains the genetic material, while the mitochondria produce energy in the form of ATP. Ribosomes build proteins, and the endoplasmic reticulum and Golgi apparatus help to fold and package them. Plant cells also have a rigid cell wall and chloroplasts for photosynthesis. Bacteria are prokaryotes, which means they have no nucleus. Understanding how these structures work together is essential for explaining health, disease and the development of new biotechnology products.',
    vi: 'Tế bào là đơn vị cơ bản của sự sống; mô tả các bào quan chính và khác biệt giữa tế bào nhân thực và nhân sơ.',
    qs: [
      ['Which structure produces ATP?', ['The nucleus', 'Ribosomes', 'Mitochondria', 'The cell wall'], 2],
      ['What do plant cells have that animal cells do not?', ['A nucleus', 'A cell wall and chloroplasts', 'Ribosomes', 'Mitochondria'], 1],
      ['Why are bacteria called prokaryotes?', ['They are plants.', 'They have no nucleus.', 'They have chloroplasts.', 'They are large.'], 1],
    ],
  },
  'dna-rna': {
    title: 'From Gene to Protein',
    text: 'DNA stores genetic information in the sequence of four bases: adenine, thymine, guanine and cytosine. The two strands of the double helix are complementary, with adenine pairing with thymine and guanine pairing with cytosine. To make a protein, the cell first copies a gene into messenger RNA through a process called transcription. The mRNA then leaves the nucleus and travels to a ribosome, where translation takes place. During translation, every codon, a group of three bases, specifies one amino acid. The amino acids are joined to form a polypeptide that folds into a functional protein. A mutation, even a single changed base, can alter the protein and sometimes cause disease.',
    vi: 'Gen được phiên mã thành mRNA rồi dịch mã trên ribosome thành protein; một đột biến nhỏ có thể gây bệnh.',
    qs: [
      ['What is a codon?', ['A type of protein', 'A group of three bases', 'A strand of RNA', 'A cell organelle'], 1],
      ['Where does translation take place?', ['In the nucleus', 'On a ribosome', 'In the membrane', 'In the vacuole'], 1],
      ['What can a single changed base do?', ['Nothing ever', 'Alter the protein and sometimes cause disease', 'Create a new cell', 'Stop transcription'], 1],
    ],
  },
  'protein-enzyme': {
    title: 'How Enzymes Work',
    text: 'Enzymes are proteins that act as biological catalysts. They speed up chemical reactions by lowering the activation energy without being consumed. Each enzyme has an active site, a small region where the substrate binds. Because the shape of the active site matches a specific substrate, enzymes are highly selective. Factors such as temperature and pH strongly influence enzyme activity. Most human enzymes work best near 37 degrees Celsius; at higher temperatures they may denature, losing their three-dimensional structure and their function. Inhibitors can also reduce activity by blocking the active site. In industry, enzymes such as amylase and protease are used to make detergents, food and biofuels.',
    vi: 'Enzyme là chất xúc tác sinh học, hoạt động nhờ trung tâm hoạt động; nhiệt độ, pH và chất ức chế ảnh hưởng đến hoạt tính.',
    qs: [
      ['What do enzymes do?', ['Store genetic information', 'Speed up reactions', 'Make energy from light', 'Build cell walls'], 1],
      ['What happens when an enzyme denatures?', ['It works faster.', 'It loses its structure and function.', 'It becomes a substrate.', 'It multiplies.'], 1],
      ['Which are examples of industrial enzymes?', ['Insulin and DNA', 'Amylase and protease', 'ATP and RNA', 'Glucose and starch'], 1],
    ],
  },
  'vi-sinh': {
    title: 'Isolating a Bacterial Strain',
    text: 'To isolate a bacterial strain from soil, researchers first collect a sample and suspend it in sterile water. They then perform a serial dilution so that individual cells can be separated on agar plates. The plates are incubated at 37 degrees Celsius for 24 hours, after which separate colonies appear. A single colony is picked and streaked onto a new plate to obtain a pure culture. Gram staining shows whether the bacteria are Gram-positive or Gram-negative, and further tests, such as 16S rRNA sequencing, identify the species. Throughout the process, aseptic technique is vital because contamination can ruin weeks of work.',
    vi: 'Quy trình phân lập vi khuẩn từ đất: pha loãng, cấy trải, ủ, tách khuẩn lạc, nhuộm Gram và giải trình tự 16S rRNA; cần kỹ thuật vô trùng.',
    qs: [
      ['Why is a serial dilution performed?', ['To kill bacteria', 'To separate individual cells on plates', 'To color the cells', 'To store the sample'], 1],
      ['How is a pure culture obtained?', ['By boiling', 'By streaking a single colony onto a new plate', 'By freezing', 'By drying'], 1],
      ['Why is aseptic technique vital?', ['It saves time.', 'Contamination can ruin the experiment.', 'It changes colors.', 'It cools the plates.'], 1],
    ],
  },
  'ky-thuat-phong-lab': {
    title: 'Running a PCR',
    text: 'Polymerase chain reaction, or PCR, makes millions of copies of a specific DNA fragment. The reaction mixture contains template DNA, two primers, nucleotides, buffer and a heat-stable DNA polymerase. The tubes are placed in a thermocycler, which repeats three steps for about thirty cycles. First, denaturation at 95 degrees separates the two DNA strands. Second, at the annealing temperature, usually between 50 and 65 degrees, the primers bind to the template. Third, during extension at 72 degrees, the polymerase builds new strands. After the run, the products are separated by gel electrophoresis and visualized under UV light. A single clear band of the expected size indicates success.',
    vi: 'PCR khuếch đại một đoạn DNA qua khoảng 30 chu kỳ biến tính, gắn mồi và kéo dài; kết quả kiểm tra bằng điện di gel.',
    qs: [
      ['What happens during denaturation?', ['Primers bind.', 'DNA strands separate.', 'New strands are built.', 'The gel is stained.'], 1],
      ['How many cycles does PCR usually repeat?', ['About three', 'About ten', 'About thirty', 'About three hundred'], 2],
      ['What indicates a successful PCR?', ['No bands', 'Many random bands', 'A single clear band of the expected size', 'A colored solution'], 2],
    ],
  },
  'len-men': {
    title: 'Scaling Up a Fermentation',
    text: 'A laboratory team developed a probiotic strain that grew well in a small flask, but producing it on an industrial scale required careful optimization. They first moved the culture into a five-liter bioreactor equipped with probes for temperature, pH and dissolved oxygen. As the cell density increased, the oxygen level dropped, so the engineers raised the agitation speed and the aeration rate. They also used a fed-batch strategy, adding glucose gradually to avoid by-products. After forty-eight hours, the biomass reached ten grams per liter. Downstream processing included centrifugation, formulation with a stabilizer, and freeze drying to preserve viability. The final product was tested for quality before it was released.',
    vi: 'Mở rộng quy mô lên men chủng probiotic: dùng bioreactor 5 lít, điều chỉnh khuấy và sục khí, nuôi bổ sung glucose, thu sinh khối và sấy đông khô.',
    qs: [
      ['Why did they raise agitation and aeration?', ['The pH was too high.', 'Dissolved oxygen dropped as cells grew.', 'The medium was too thick.', 'To cool the tank.'], 1],
      ['Why was glucose added gradually?', ['To avoid by-products', 'To change the color', 'To kill cells', 'To save time'], 0],
      ['Which step preserved the viability of the cells?', ['Centrifugation', 'Freeze drying', 'Fermentation', 'Sampling'], 1],
    ],
  },
  'cong-nghe-gen': {
    title: 'Making Recombinant Insulin',
    text: 'Before the 1980s, insulin for people with diabetes was extracted from animals. Today, most insulin is produced by recombinant DNA technology. Scientists first isolate the human insulin gene and insert it into a plasmid vector together with a selection marker, usually an antibiotic resistance gene. The plasmid is then introduced into bacteria or yeast through transformation. Only the cells that took up the plasmid can survive on a medium containing the antibiotic. These transformed cells are grown in large bioreactors, where they produce insulin continuously. After purification and strict quality control, the insulin is safe for patients. This process shows how genetic engineering turns microorganisms into efficient factories for medicines.',
    vi: 'Insulin tái tổ hợp được tạo bằng cách chèn gen người vào plasmid, biến nạp vào vi sinh vật, chọn lọc bằng kháng sinh và nuôi trong bioreactor.',
    qs: [
      ['What is the role of the selection marker?', ['To make insulin', 'To identify cells that took up the plasmid', 'To cool the cells', 'To cut DNA'], 1],
      ['How is the gene introduced into the cells?', ['By transformation', 'By boiling', 'By drying', 'By centrifugation'], 0],
      ['Where do the cells produce insulin?', ['In small tubes only', 'In animals', 'In large bioreactors', 'In plants'], 2],
    ],
  },
  'gmp-qa': {
    title: 'A Day in Quality Assurance',
    text: 'In a pharmaceutical factory, every batch must follow Good Manufacturing Practice, or GMP. In the morning, the quality assurance officer reviews the batch record to make sure each step was documented and signed. Quality control staff take samples and test them against the specifications. Today, one result for pH was slightly out of range, so the team opened a deviation report and began an investigation to find the root cause. Meanwhile, the officer checks that all equipment has been calibrated and that operators have completed their training. The batch will be released only when all tests pass and the documents are approved. Accurate records and traceability protect both patients and the company.',
    vi: 'Một ngày của QA: rà soát hồ sơ lô, xử lý sai lệch khi pH ngoài tiêu chuẩn, kiểm tra hiệu chuẩn và đào tạo; chỉ xuất xưởng khi đạt mọi yêu cầu.',
    qs: [
      ['What happened with the pH result?', ['It was perfect.', 'It was slightly out of range.', 'It was missing.', 'It was recalled.'], 1],
      ['When will the batch be released?', ['Immediately', 'When all tests pass and documents are approved', 'After one week', 'When a customer asks'], 1],
      ['Why are accurate records important?', ['They are decorative.', 'They protect patients and the company.', 'They reduce tests.', 'They shorten production.'], 1],
    ],
  },
  'viet-bao-cao': {
    title: 'Writing a Research Paper',
    text: 'A typical research paper follows the IMRaD structure: Introduction, Methods, Results and Discussion. The introduction explains the background and states the aim of the study. The methods section describes materials and procedures in enough detail for others to repeat the work. In the results section, authors present the data clearly, using tables and figures, and report the statistical analysis, for example the p-value. The discussion interprets the findings, compares them with previous studies and admits limitations such as a small sample size. Finally, the conclusion summarizes the main message. Before submission, researchers should check the references, revise the language and make sure the abstract reflects the whole study.',
    vi: 'Bài báo khoa học theo cấu trúc IMRaD; mỗi phần có vai trò riêng, kết quả nêu số liệu còn thảo luận diễn giải và nêu hạn chế.',
    qs: [
      ['What does IMRaD stand for?', ['Introduction, Methods, Results, Discussion', 'Idea, Model, Report, Data', 'Index, Material, Review, Draft', 'Input, Method, Result, Draft'], 0],
      ['What belongs in the results section?', ['Interpretation of findings', 'Data, tables, figures and statistics', 'Acknowledgments', 'Future plans'], 1],
      ['What should the discussion include?', ['Raw data only', 'Limitations and comparison with earlier studies', 'The abstract', 'The references list'], 1],
    ],
  },
};
