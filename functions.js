

function drawPhotos(){
  var x = 0;
  x = Math.floor(Math.random() * 60) +1 ;
  alert("You got the "+ x + " sign!");
  localStorage.setItem("sign_index",x);
}

function get_sign(){
  var x = localStorage.getItem("sign_index");
  document.getElementById("drew_sign").innerHTML = "You got the " + x + " sign!" ;
  document.getElementById("card_front").src= signsData[x-1].front;
  document.getElementById("card_back").src= signsData[x-1].back;
  document.getElementById("sign_description").innerHTML = signsData[x-1].description;
}

var signsData =[
  {
    "index":0,
    "front":"images/web/1_front.png",
    "back":"images/web/1_back.png",
    "description":"<p>When will the national fortune of a country end?<br>Showing the rise and fall of a country is the principle of the rise and fall of the sun, the moon, and the yin and yang.<br>Namely, there are tyrants when the cathode is positive and the anode is negative.</p><br><p>'The National Fortune of a Country' is, in essence, a thing that can be counted on, like the rise and fall of the sun, the moon, the yin and yang.</p><br><p>When the cathode is positiv and the anode is negative, a tyrant will rise up and seize the country.</p><br><p>When the cathode is negative and the anode is positive, a virtuous man will rise up and save the country.</p><br><p>When the cathode and the anode are positive and negative respectively, the country will be in a state of great disorder.</p>"
  },
  {
    "index":1,
    "front":"images/web/2_front.png",
    "back":"images/web/2_back.png",
    "description":"<p>Light is attracted to fruit because fruit is beautiful, but fruit also gives off a sweet smell.</p><p>Light enters the fruit and becomes color.</p><p>Fruit is a symbol for the Tang Dynasty.<br>Fruit also represents Wu Zetian. The queen was the only one who could eat the fruit.<br>She was the only one who was allowed to enjoy the Tang Dynasty.</p><p>Background info:<br>A mysterious bird is building a nest on a tree.<br>In Tang Dynasty, the Empress doted on the emperor's son, Li Xian. <br>Her favor was so strong that she wanted to make him the future emperor. <br>She actually wanted to remove her husband, Emperor Zhongzong, and place Li Xian on the throne. <br>Zhongzong was aware of the situation but couldn't do anything.</p>"
  },
  {
    "index":2,
    "front":"images/web/3_front.png",
    "back":"images/web/3_back.png",
    "description":"<p>A woman on the throne, of course, would never be seen as a usurper. After all, she had been born into royalty. She had no need of reading the classics or refining her calligraphy. Nor did she have to be physically strong to ride into battle. The most powerful thing she had was her beauty and charm.</p><p>It was in her thirties that Wu Zetian rose to prominence. She would soon become the most powerful woman in China. Her situation as the wife of the emperor gave her opportunity. From the first, she was a shrewd advisor. She was also a woman in an age when women were not expected to have any political influence. In order to remain in power, she had to be a master of both charm and intrigue.</p><p> A woman on the throne, of course, would never be seen as a usurper. After all, she had been born into royalty. She had no need of reading the classics or refining her calligraphy. Nor did she have to be physically strong to ride into battle. The most powerful thing she had was her beauty and charm.</p><p>It was in her thirties that Wu Zetian rose to prominence. She would soon become the most powerful woman in China. Her situation as the wife of the emperor gave her opportunity. From the first, she was a shrewd advisor. She was also a woman in an age when women were not expected to have any political influence. In order to remain in power, she had to be a master of both charm and intrigue.</p>"
  },
  {
    "index":3,
    "front":"images/web/4_front.png",
    "back":"images/web/4_back.png",
    "description":"<p>The emperor's armies overextended, the people impoverished, and the nobility was too extravagantly wasteful.</p><p>The thousand years of the Han Dynasty will perish.</p><p>The bird can no longer fly, is old, seriously ill, and dying.</p><p>The bird was born to soar above the clouds, but its wings are about to fall off.</p><p>The bird is still full of spirit and is very strong.</p><p>The Han Dynasty has fallen, and the Tang Dynasty is about to end.</p>"
  },
  {
    "index":4,
    "front":"images/web/5_front.png",
    "back":"images/web/5_back.png",
    "description":"<p>Yang is a fictional character in the Three Kingdoms period of Chinese history. <br>She was a concubine of Emperor Xuanzong of Tang and later became his favorite.<br>She was the mother of Prince Cheng and Prince Teng.<br>Her father was Yang Guozhong, who served as chancellor during Xuanzong's reign.</p><p>Yang was a beautiful woman with a flower-like beauty.<br>She was the Emperor Xuanzong's favorite concubine.<br>She was also the most favoured concubine of Xuanzong, known as the 'Flying Phoenix'.<br>She later became an imperial consort.</p>"
  },
  {
    "index":5,
    "front":"images/web/6_front.png",
    "back":"images/web/6_back.png",
    "description":"<p>The Anshi Rebellion was a major uprising in China against the Tang Dynasty from AD 755 to 763.<br>It was led by An Lushan, who established his own state of Yan.<br>The rebellion spanned the reigns of three Tang emperors before it was suppressed.<br>The war was the largest in the history of China's dynasty.<br>It was also one of the most destructive wars in history, with over 50 million casualties.</p>"
  },
  {
    "index":6,
    "front":"images/web/7_front.png",
    "back":"images/web/7_back.png",
    "description":"<p>On the same day that the Emperor ascended the throne, and during the Anshi Rebellion, the vassal state of Jidu was attacked by Tubo, and the Jidu king surrendered.<br>At this time, the ally of Tubo, Gaozong of the Changle kingdom, requested that the vassal states of Chang'An and other places be turned over to him.<br>In order to avoid this, the Emperor ordered that the vassal states of Chang'An and other places be destroyed.<br>It was the first time in history that large scale destruction of vassal states occurred.</p><p>Background info:<br>The Anshi Rebellion was a rebellion that occurred in 755.<br>It was a rebellion that occurred in the Tang Dynasty, and was started by An Lushan.<br>It was a rebellion that occurred during the reign of Emperor Xuanzong.<br>It was a rebellion that occurred during the Tang Dynasty.</p>"
  },
  {
    "index":7,
    "front":"images/web/8_front.png",
    "back":"images/web/8_back.png",
    "description":"<p>'The enemies of the Central Plains are now dead.'</p><p>It is ironic that the enemies of the Central Plains are all dead.<br>'They are all dead.'</p><p>The Central Plains bloodbath is a turning point in the history of the Tang Dynasty.</p><p>'bloodbath.'</p><p>Fengxian is located in the Henan Province.<br>It is the only city to resist the Anshi Rebellion.<br>It is a city that has been invaded by the Anshi Rebellion twice.</p>"
  },
  {
    "index":8,
    "front":"images/web/9_front.png",
    "back":"images/web/9_back.png",
    "description":"<p>The three colors of blue, red and yellow.<br>This phenomenon actually refers to the 'Huang Chao Rebellion.'</p><p>Yu 'borrowed' the power of Li Ke's use of the Shatuo army to destroy the Huangchao are several times the description of the Huang Chao rebellion, and a direct reference to Li Keyong and Zhu Wen fighting together.</p><p>Huang Chao Rebellion</p>"
  },
  {
    "index":9,
    "front":"images/web/10_front.png",
    "back":"images/web/10_back.png",
    "description":"<p>Zhu Quanzhong was born in Wanyan Jinghai, Yunzhou, one of the most powerful military generals in the Tang Dynasty, and the first emperor of the Later Liang Dynasty.</p><p>Later Liang Dynasty</p><p>The Later Liang Dynasty was the first of the Five Dynasties in the Ten Kingdoms period of Chinese history.<br>It was founded by Zhu Wen, later known as Emperor Taizu of Song.<br>The Later Liang Dynasty was founded by Zhu Wen, who later became Emperor Taizu of Song, and lasted from 907 to 923.</p><p>Zhu Wen (852-912), the founding emperor of the Later Liang Dynasty, was a military general under Wang Jian.<br>He took control of the Dali region in Yunnan in 905 and took the title of ‘King of Liang.’<br>In 911, he established the Later Liang Dynasty, which lasted until 923.<br>Zhu Wen is also known as Emperor Taizu of Song.</p>"
  },
  {
    "index":10,
    "front":"images/web/11_front.png",
    "back":"images/web/11_back.png",
    "description":"<p>Li Cunxu Will Be Killed.</p><p>Li Cunxu, the next emperor of the Later Tang, was a great emperor.<br>But at his death, his younger brother Li Siyuan became emperor.<br>Li Siyuan was also a great emperor.</p><p>But Li Siyuan was not Li Cunxu.</p>"
  },
  {
    "index":11,
    "front":"images/web/12_front.png",
    "back":"images/web/12_back.png",
    "description":"<p>Twenty-eight states were cut to Khitan.</p><p>'Twenty-eight' is the number of states a Chinese emperor took to be a vassal.</p><p>Shi Jingtang, the emperor of the Later Tang Dynasty, was keen on 'taking vassal states'.<br>He did not think that the emperor should be involved in the management of the state.<br> And in his eyes, the vassal states were taken by him, namely, the emperor.<br>Therefore, he made a great sacrifice for the sake of taking vassal states.</p><p>The emperor Shi Jingtang was quite good at taking vassal states.<br>He took sixteen states from the Khitan, and the sixteen states were located in the western part of Yanyun.<br>The sixteen states were in the east of the sixteen states that the Khitan had (Note: Khitan was located in the north of China.<br>In the Tang Dynasty, the sixteen states in the west of Yanyun were in the south of Yanyun).</p>"
  },
  {
    "index":12,
    "front":"images/web/13_front.png",
    "back":"images/web/13_back.png",
    "description":"<p>A brief overview of the Later Han Dynasty:</p><p>The Later Han Dynasty's end was marked by the Yellow Turban Rebellion, a peasant rebellion led by Zhang Jiao, which overthrew Emperor Ling of Han.<br>The Han Dynasty was restored after the tragedy, but it was much weakened.</p><p>There was much infighting in the Han Dynasty later on, and finally, Han Dynasty was completely overthrown by a rebel named Dong Zhou, who established the Xin Dynasty.</p>"
  },
  {
    "index":13,
    "front":"images/web/14_front.png",
    "back":"images/web/14_back.png",
    "description":"<p>After all, the three dynasties and three surnames of the Five Dynasties did not last long, only a moment in history.</p><p>The three dynasties are:</p><p>The Song Dynasty<br>The Liao Dynasty<br>The Jin Dynasty</p><p>The three surnames are:</p><p>The surname Wang is characterized by the Wang family of the Northern Song Dynasty.<br>The emperor of the Song Dynasty is Wang Shizong.</p><p>The surname Zhou is characterized by the Zhou family of the Song Dynasty.<br>The emperor of the Song Dynasty is Zhou Shizong.</p>"
  },
  {
    "index":14,
    "front":"images/web/15_front.png",
    "back":"images/web/15_back.png",
    "description":"<p>During The Five Dynasties And Ten Kingdoms,A man by the name of Wang Anshi was the prime minister.<br>During his time, he invented the policy of 'Instigating Reforms' and made a series of reforms that caused great upsets, which are often called the “Reform Movement of The Five Dynasties and Ten Kingdoms”.<br>In this chaotic time, there was chaos.</p><p>During The Five Dynasties And Ten Kingdoms, The people lived in poverty.</p><p> The prime minister used his reform to help the people live in prosperity, and he used his wisdom to control the people.<br>In this chaotic time, there was prosperity.</p>"
  },
  {
    "index":15,
    "front":"images/web/16_front.png",
    "back":"images/web/16_back.png",
    "description":"<p>I shall be telling this with a sigh</p><p>Somewhere ages and ages hence:</p><p>Two roads diverged in a wood, and I—</p><p>I took the one less traveled by,</p><p>And that has made all the difference.</p><p>--The Road Not Taken</p>"
  },
  {
    "index":16,
    "front":"images/web/17_front.png",
    "back":"images/web/17_back.png",
    "description":"<p>In the year 1100, the Song dynasty attacked the Liao dynasty and the Khitan people who were nomadic people and lived in the north.<br>The Liao dynasty collapsed and the emperor of the Liao dynasty surrendered.<br>After this, the Song dynasty established the Liao dynasty’s emperor as the emperor of the new dynasty.<br> The Khitan people surrendered and gave up their independence and became the subjects of the Song dynasty and they escaped to the south of the Yangtze River.</p>"
  },
  {
    "index":17,
    "front":"images/web/18_front.png",
    "back":"images/web/18_back.png",
    "description":"<p>This is a story of three men who owned three pets.<br>There once were three men, all brothers, who all had their own pets.</p><p>The first man's pet was a dog.<br>The dog was extremely loyal, and it would listen to all of its master's commands.<br>The dog was very protective, and would fight to the death for its master.</p><p>The second man's pet was a cat.<br>The cat was extremely lazy, but it was very smart.<br>It would sometimes fight for its master, but it never fought to the death.<br>The cat would just run away if it ever saw a problem.</p><p>The third man's pet was a monkey.<br>The monkey was extremely playful, and it would play pranks on all of the villagers.<br>One day, the three men were walking in the woods.<br>The three pets were also with them. When the three men stopped, they heard a strange noise from a bush.<br>When they looked into the bush, they saw a beautiful fairy.<br>She told them to follow her.<br> She told them that they could have whatever they wanted.</p><p>The dog thought about this. He had always wanted to be a human being.<br>The fairy turned him into a human being, and then she went away.<br>The cat thought about this. He had always wanted to be rich. <br>The fairy turned him into a human being, and then she went away.<br>The monkey thought about this. <br>He had always wanted to be the strongest man in the world. <br>The fairy turned him into a human being, and then she went away.<br>The three men and their pets all became human beings.<br>They all lived together happily ever after.<br>This was a story of three men who owned three pets.</p>"
  },
  {
    "index":18,
    "front":"images/web/19_front.png",
    "back":"images/web/19_back.png",
    "description":"<p>Two roads diverged in a yellow wood,<br>And sorry I could not travel both<br>And be one traveler, long I stood<br>And looked down one as far as I could</p><p>To where it bent in the undergrowth;<br>Then took the other, as just as fair,<br>And having perhaps the better claim,<br>Because it was grassy and wanted wear;<br>Though as for that, the passing there<br>Had worn them really about the same,<br>And both that morning equally lay</p><p>In leaves no step had trodden black.<br>And both that morning equally lay<br>In leaves no step had trodden black.<br>Oh, I kept the first for another day!<br>Yet knowing how way leads on to way,<br>I doubted if I should ever come back.</p><p>I shall be telling this with a sigh<br>Somewhere ages and ages hence:<br>Two roads diverged in a wood, and I—<br>I took the one less traveled by,<br>And that has made all the difference.</p>"
  },
  {
    "index":19,
    "front":"images/web/20_front.png",
    "back":"images/web/20_back.png",
    "description":"<p>Yi Que was a famous doctor in the state of Song.<br>One day, the emperor of Song summoned him and asked him,‘I have heard that your healing skills are very effective.<br> Now, I have a disease that cannot be cured.<br>If you can heal me, then your payment will be very generous.<br> If you cannot, then I will punish you.’</p><p>Yi Que responded, ‘Your Majesty, I have heard that a disease can be cured if it is treated in the right time. <br>If it's too late, then it cannot be cured even if you use the best treatment.<br>However, I am willing to give it a try.’<br>The emperor said, ‘I have a big disease that started from a small disease.<br>Now, it has developed into a big problem.<br>I'm afraid that you cannot cure it.’</p><p>Yi Que said, ‘You should not think that way.<br>A disease that started from a small disease can be cured.<br> And a disease that has developed into a big problem can also be cured. <br> Your Majesty, please tell me your symptoms.’<br>The emperor said, ‘I have a sore on my right thigh.<br>It itches very badly.<br> Sometimes, it is so painful that I cannot sleep at night.’</p><p>Yi Que then asked him several questions.<br>After he examined the sore, he asked the emperor to take off his robe.<br>Yi Que touched the sore and said, ‘Your Majesty, this is not a sore. It is a tumor. And it is very serious.’<br>The emperor was shocked. Then he asked, ‘What if we do not cure it in time?’</p><p>Yi Que said, ‘If it is not cured in time, then the tumor will continue to develop.<br>And it will spread to your body and your blood.<br>It will be very serious. It could kill you.’<br>The emperor said,<br>‘Then we have to do something. What do we need to do?’</p><p>Yi Que said, ‘You need to do the treatment.<br>And you need to stop eating meat and drinking wine.<br>Also, you need to exercise more.<br> This way, you will have a good chance of curing it.’<br>The emperor asked again, ‘Can we cure it?’</p><p>Yi Que said, ‘It's hard to say. It could be cured.<br>But it's also hard to cure.<br>Your Majesty, you should not think too much about it.<br>If you're willing to do the treatment, then we have a chance.<br>If you're not willing to do the treatment, then we don't have a chance.’<br>The emperor said, ’I have heard that your medicine is very effective.<br>I know that I will not regret it if I follow your advice.<br>And I will have a chance to be cured.<br>Then I will do the treatment.’</p><p>Yi Que said, ‘You have done the right thing.’</p>"
  },
  {
    "index":20,
    "front":"images/web/21_front.png",
    "back":"images/web/21_back.png",
    "description":"<p>I am going to die.<br>And I want you to know that I’m trying to be brave.<br>I’ve taken the part of the dying, and I will try to play it well,<br>But I am only a novice in the art of dying.<br>It is hard—<br>it is hard to know how to die.<br>I have never died before, and I will try to do it right.</p><p>I will die with my head erect.<br>I will die looking up at the blue sky.<br>I will die with my mind at peace.<br>I will die with a smile on my lips.<br>I will die trying to tell a joke.<br>I will die trying to give a kiss to my wife.<br>I will die—<br>but when I die I want you to know that I’m trying to be brave.</p><p>I will die as Chinese should:<br>with my face toward China and my feet toward the West.</p>"
  },
  {
    "index":21,
    "front":"images/web/22_front.png",
    "back":"images/web/22_back.png",
    "description":"<p>The clay horse has stopped in the middle of the river,<br>The bronze soldier is still at the crossroads.<br>The moment has arrived,<br> but the words have not been said,<br>The candle flickers and is about to be blown out.<br>A tale from long ago, it is true;<br>As a matter of fact, it did happen this way.<br>The river has flowed on,<br>the moon has set,<br>The night is black now,<br> the road disappears.<br>If there is a next time,<br> or a last time,<br>We'll let our hearts be the compass,<br>And let our senses be the guide.<br>If you can't see the best, then,<br>The next best thing is to settle for what you can see.<br>When you have a dream in the darkness,<br>You're not alone; there is a candle.</p>"
  },
  {
    "index":22,
    "front":"images/web/23_front.png",
    "back":"images/web/23_back.png",
    "description":"<p>The Great Wall is long, and the mountains are tall;<br>The Chinese people are industrious, and the nation is strong;<br>China is just like a lofty tower, or a big ship sailing in the sea;</p><p>The people of China are like a family,<br>With all hearts beating as one;<br>China is like a tree with a trunk of many branches and leaves;</p><p>The Chinese people are just like a river,<br>Flowing into the sea and becoming one with it.</p><p>A river flows on forever, without stopping;<br>A ship sails on smoothly, without turning back;<br>The people of China all share the same spirit,<br>And will always be together.</p>"
  },
  {
    "index":23,
    "front":"images/web/24_front.png",
    "back":"images/web/24_back.png",
    "description":"<p>A blue-white orb is in the sky<br>The stars are in the sky<br>The moon is in the sky<br>I stand under the moon</p><p>The wind is in the sky<br>The breeze is in the sky<br>The night is in the sky<br>I stand alone under the dome of heaven</p><p>The ancient trees are in the forest<br>The ancient oaks are in the forest<br>The ancient pines are in the forest<br>They are towering and vigorous and great<br>I stand under the green leaves</p><p>The water is in the spring<br>The water is in the stream<br>The water is in the river<br>The water is in the sea<br>I stand on the shore</p><p>The mountain is in the distance<br>It is grand and majestic<br>I stand on the highest point of the mountain<br>I see the river and the sea and the sky<br>I hear the bird singing</p>"
  },
  {
    "index":24,
    "front":"images/web/25_front.png",
    "back":"images/web/25_back.png",
    "description":"<p>'But I see no one.'<br>'Your Majesty, you have come to a mountain,<br>A place where people don’t live.<br>There is no one here to keep you company,<br>So why don’t you follow the stream<br>And listen to the song of the birds?<br>You can enjoy the beauty of nature.<br>It’s the best place for you to relax.‘<br>However, the emperor didn’t pay attention to him and set up camp.<br>The emperor looked up at the lofty mountain,<br>And said, ‘Nothing but grass and trees!<br>This is an uninhabited land.<br>I shall go up to the top,<br>And take a look around.’<br>He walked up the slope and after a while, he saw a little man.<br>’Hey, you,‘the emperor called out, “do you know the way to the top of the mountain?”<br>‘I don’t know.’<br>’You must know.‘<br>’I don’t.’<br>‘You must be teasing me.‘<br>’I’m not.‘<br>‘Don’t lie to me.‘<br>’I’m not lying. I don’t know.’<br>The emperor was angry and he took his whip out.<br>‘Do you know why I’m angry?‘<br>’I don’t.’<br>‘You do know.‘<br>’I don’t.’<br>The emperor was furious and he beat the little man.</p>"
  },
  {
    "index":25,
    "front":"images/web/26_front.png",
    "back":"images/web/26_back.png",
    "description":"<p>The emperor ignored the political affairs, and Pu didn't take the opportunity to take the time to dominate the power.</p><p>He detained all the warnings and merits of the generals and ministers.</p><p>The loyal minister was framed.<br>The rebels rose from all directions.</p><p>The emperor ignored the political affairs, and Pu didn't take the opportunity to take power.</p><p>Pan Yue went abroad and didn't bring back good things to encourage the emperor to take the throne. <br>The loyal minister was framed.</p><p>The rebels rose from all directions and Pu didn't take a lesson from it. </p><p>The country fell into chaos. </p>"
  },
  {
    "index":26,
    "front":"images/web/27_front.png",
    "back":"images/web/27_back.png",
    "description":"<p>'Mmm.' He groaned, closing his eyes.<br>Ming Taizu opened his eyes slowly, and put his legs down from the armchair.<br>It was only then that his legs began to hurt.<br>It was time for him to stop resting. He slowly stood up and walked to the door of the study. <br>He pushed the door open slowly, and saw the two princes and the officials waiting outside.</p><p>‘Your Majesty.’ The two young princes and the officials immediately went on their knees and bowed down.<br>‘The things you wanted have been prepared.’<br>‘Good.’ He nodded slightly. ‘We are going to see the people outside the city.’</p><p>‘Yes, Your Majesty.’ The princes and the officials immediately stood up and went out of the door.<br>Ming Taizu looked at the two princes and saw them carrying a big wooden box and a small wooden box.<br> He walked out of the door and left the palace.</p>"
  },
  {
    "index":27,
    "front":"images/web/28_front.png",
    "back":"images/web/28_back.png",
    "description":"<p>This is a game of throwing dice.</p><p>It has often been saying of gamblers that they are ready to stake everything on a single throw, but this is a mistake.<br>They do not stake their money in a single throw; they stake their money on a single throw.</p><p>To gamble in this way means that if you win you lose, and if you lose you lose.</p><p>Being a man of high spirit, he often staked his money on a single throw,<br>and though his losses were sometimes heavy,<br>his gains were large enough to more than makeup for them.</p><p>This was the way he made his living.</p>"
  },
  {
    "index":28,
    "front":"images/web/29_front.png",
    "back":"images/web/29_back.png",
    "description":"<p>You have been a ghost among us<br>And there is still one little trace of you<br>Among the flowers and plants<br>In the fish pond.<br>To tell you the truth,<br>I have not been able to sleep for a long time now.</p><p>I see you in the sunshine,<br>I see you in the sunshine,<br>But where are you?</p><p>You were born before your time,<br>That's why you could not endure.</p>"
  },
  {
    "index":29,
    "front":"images/web/30_front.png",
    "back":"images/web/30_back.png",
    "description":"<p>I stand up, brush the dirt from my pants, and start trekking through the forest again.<br>I didn't get a chance to rest, as the forest is too thick and I'm afraid I'll get lost.<br>When the sun sets, I stop to set up camp.<br> I've been lost for a few days now, and I don't know where I am.</p><p>I wish I had a map.<br> I wish I had food.<br> I wish I had a compass.<br> I wish I had a weapon.<br>I wish I had my friends.<br>I fall asleep on the ground.</p><p>The next morning, I don't get up.</p>"
  },
  {
    "index":30,
    "front":"images/web/31_front.png",
    "back":"images/web/31_back.png",
    "description":"<p>Background info:<br>Story of the heroes trying to lead the people out of the valley of death, and the heroes winning in the end.</p><p>Valley of Death</p><p>Mountainous ranges and fast-flowing streams,<br>The earth is torn asunder by the blade.</p><p>The sun is a golden blaze set behind the hills,<br>Though the setting is not the last</p><p>The people left behind are few,<br>Only the dead remain</p><p>When heroes die<br>The world is not the same,<br>Life has lost its luster.</p>"
  },
  {
    "index":31,
    "front":"images/web/32_front.png",
    "back":"images/web/32_back.png",
    "description":"<p>Zhang Xianzhong's army occupied Sichuan for twenty years.<br>He was from Xichang of Sichuan.</p><p>In 1644, Zhang Xianzhong was invited by Li Zicheng to invade Sichuan.<br>In 1645, Zhang Xianzhong invaded Sichuan and captured Chengdu on October 10.<br>In 1646, Zhang Xianzhong became king of Sichuan.<br>In 1647, Zhang Xianzhong captured Nanjing.<br>In 1649, the Ming army recaptured Sichuan.<br>In 1650, Zhang Xianzhong recaptured Chengdu.<br>In 1651, the Ming army recaptured Sichuan again.<br>In 1652, the Ming army recaptured Chengdu again.<br>In 1656, Zhang Xianzhong recaptured Chengdu again.<br>In 1662, Zhang Xianzhong was killed by his subordinates.</p>"
  },
  {
    "index":32,
    "front":"images/web/33_front.png",
    "back":"images/web/33_back.png",
    "description":"<p>The Qing Dynasty was founded in 1636, when Nurhaci, the leader of the Jianzhou Jurchens, killed his brother and set up an independent kingdom. <br>In 1644, Nurhaci changed the name of the kingdom to Qing and changed the name of the tribe to Manchu.<br>In 1683, the Kangxi Emperor ascended the throne, and in 1685 was officially accepted as the emperor of the Qing Dynasty.<br> The Qing Dynasty lasted for almost three centuries, and the whole of China was completely unified. <br>It is the best dynasty in Chinese history, which achieved great social stability and economic prosperity.<br>During the Qing Dynasty, China experienced the most peaceful and prosperous time in its history. <br>The economy was stable, the population was high, and various ethnic groups were living in harmony.<br>Qing people were content with their lives and enjoyed a high level of civilization. Qing Dynasty had three emperors: the Kangxi Emperor (1662-1722), the Yongzheng Emperor (1722-1735), and the Qianlong Emperor (1736-1795).</p>"
  },
  {
    "index":33,
    "front":"images/web/34_front.png",
    "back":"images/web/34_back.png",
    "description":"<p>Ideals are like stars.<br>You will not succeed in touching them with your hands.<br>But like the seafaring man on the desert of ocean, you choose them as your guides, and following them you will reach your destiny</p><p>The world is so big and I am so small.<br> I cannot change the world, but I can change myself.<br> I can't stop the clouds from coming,<br>but I can always decide not to be troubled by the rain.</p><p>Though we travel the world over to find the beautiful,<br> we must carry it with us or we find it not.</p><p>There is only one difference between a long life and a good dinner:<br> that, in the dinner, the sweets come last.</p><p>The only man who never makes mistakes is the man who never does anything.</p><p>If you do not change direction,<br>you may end up where you are heading.</p><p>A man may build a palace and yet not be happy in it.</p><p>The best time to plant a tree is twenty years ago.<br> The second best time is now.</p><p>The only thing you can do with good advice is pass it on.<br>It is no use to you unless you act on it.</p>"
  },
  {
    "index":34,
    "front":"images/web/35_front.png",
    "back":"images/web/35_back.png",
    "description":"<p>It refers to the British and French coalition forces looting and burning the Old Summer Palace on October 7, 1860.<br>It refers to the fact that Emperor Xianfeng fled Beijing to Rehe,<br>but failed to return to Beijing, and died in Rehe the following year. <br>The Qing Dynasty relied on Zeng Guofan, Zuo Zongtang, and Li Hongzhang to flatten the war, stabilize the community, <br>and carry out the Westernization Movement, <br>which helped prop up the Qing dynasty, <br>which was about to be almost end.</p><p>‘I believe that the direction of a person's life is not determined by the amount of sheer luck that person has.<br>It is determined by the amount of hard work, dedication, <br>and perseverance that person has.<br>I believe that the difference between success and failure is having the willpower to continue to strive towards my goal.’</p><p>Background info:</p><p>This is the theme of the book.</p><p>‘I love you not only for what you are, but for what I am when I am with you.<br>I love you not only for what you have made of yourself, but for what you are making of me.<br> I love you for the part of me that you bring out.’</p>"
  },
  {
    "index":35,
    "front":"images/web/36_front.png",
    "back":"images/web/36_back.png",
    "description":"<p>A good ending, so I will wait;<br>I will notice when I am there.</p><p>As I think of this, the sorrows of my life<br>Seem to lose their savor.</p><p>I went to visit the Queen Mother's tomb,<br>But I could not see her spirit;</p><p>Did she not think of me, the only one<br>She ever loved?</p>"
  },
  {
    "index":36,
    "front":"images/web/37_front.png",
    "back":"images/web/37_back.png",
    "description":"<p>The Wuchang Uprising, which took place on October 10, 1911, <br>is a turning point of the Revolution of 1911.<br>It is a milestone in the history of the Chinese Revolutionary Army and <br>a symbol of the reunification of the country.</p><p>The 'Wuchang Uprising' refers to the uprising that was jointly organized by <br>the revolutionaries in Hubei Province and the New Army in the city of Wuchang, <br>which is currently known as Wuhan City. <br>It is also known as the 'October 10th Revolution.'</p>"
  },
  {
    "index":37,
    "front":"images/web/38_front.png",
    "back":"images/web/38_back.png",
    "description":"<p>A martial arts story in 52 words or less.</p><p>Tenth night.<br>Seven new stars.<br>You are far from home.</p><p>Much has changed.<br>The house is gone.<br>The walls are gone.<br>The ground where the house stood is gone.</p><p>The stars are gone.<br>The moonlight is gone.<br>The darkness is gone.</p><p>Your eyes are gone.</p><p>Background info:</p><p>This poem is about the First World War.<br> It is set in a village in Shandong Province of China.<br> The Chinese suffered from the war in a time when the Japanese invaded and occupied China.</p>"
  },
  {
    "index":38,
    "front":"images/web/39_front.png",
    "back":"images/web/39_back.png",
    "description":"<p>I touched the sand<br>It crumbled in my hand<br>I reached to feel the waves<br>They drew away from land</p><p>I saw the sky<br>It opened its mouth<br>I looked for the sun<br>It hid behind the clouds</p><p>I tasted the air<br>It was salt  <br>I touched the water<br>It was warm</p>"
  },
  {
    "index":39,
    "front":"images/web/40_front.png",
    "back":"images/web/40_back.png",
    "description":"<p>On a boat, the wind is blowing,<br>The waves are roaring,<br>The boat is rocking,<br>The water is bubbling,<br>The lanterns are swaying.</p><p>In the end, a new world,<br>A new life is coming,</p><p>I wish you can work hard.</p><p>Background info:</p><p>In the past, many people from China went to Taiwan to make a living,<br>and a lot of them were government people,<br>but they were not originally from Taiwan.</p>"
  },
  {
    "index":40,
    "front":"images/web/41_front.png",
    "back":"images/web/41_back.png",
    "description":"<p>'Escape to what?'<br>Anywhere you go, I will follow.<br>If you go east, I will turn west,<br>If you go south, I will go north.<br>If you go to the heavens, I will go to hell.</p>"
  },
  {
    "index":41,
    "front":"images/web/42_front.png",
    "back":"images/web/42_back.png",
    "description":"<p>The following day, a dispatch from the American Legation arrived.<br>It said that the American marines had arrived at the city on Tuesday,<br>but were prevented from entering the city by the chaos. <br>After the crowd calmed down, the marines were able to enter the city and quell the chaos.<br>They had arrested a large number of the rioters and opened the gates to allow people to come in and <br>out of the city freely.</p><p>The letter also said that the marines had met with the governor,<br>and the governor had agreed to make the changes they had proposed in their letter.<br>The governor now agreed with the American marines that the city gates should be opened from 7am to 7pm everyday,<br> and that the city gates would be open on weekends.</p><p>The letter also said that the marines had met with the foreign consuls,<br>and the foreign consuls had agreed to meet with the American Consul on Wednesday to<br>discuss the issues of the foreign consuls and merchants in the city.</p>"
  },
  {
    "index":42,
    "front":"images/web/43_front.png",
    "back":"images/web/43_back.png",
    "description":"<p>Myself, My Pointer Sister and My Brother</p><p>My Pointer Sister and I are twins, so we are born on the same day. My brother was born 9 months after us.<br>My Pointer Sister has light brown hair, My Brother has black hair and I have dark brown hair.<br>My Pointer Sister loves me, My Brother loves me and I love My Pointer Sister, but I love My Brother most of all.<br>My Pointer Sister and My Brother are the most important people in my life.</p><p>I am Pointer Sister's role model. She wants to be like me when she grows up. She looks at me for advice.<br>I am My Brother's role model.<br> He loves me and I love him.<br> I help him with his homework and teach him important lessons.</p><p>I am the leader of our family. I have to make decisions for the whole family.<br> I am the person who is responsible for making sure that we get along.<br>My Pointer Sister is the artist of our family. <br>She loves to draw and paint.<br> She loves animals and plants.<br>My Brother is the smart one in our family.<br> He's very good at math and science. He has a talent for fixing things.</p><p>I am the goofball of our family.<br> I love to make people laugh and I love to play funny pranks.<br>I am the youngest child in our family.<br> I am the baby. I am the person who gets spoiled the most.</p>"
  },
  {
    "index":43,
    "front":"images/web/44_front.png",
    "back":"images/web/44_back.png",
    "description":"<p>A saint's heart is a deep forest;<br>Her words are like flowers and fruits.<br>When the saint has eaten she gives to the poor,<br>And her true love is like a spiritual dragon.</p><p>She is the sun in the universe,<br>The moon in the water, the flower in the garden.<br>She is like the bright light of the morning,<br>The quiet light of the evening.</p><p>The saint is like a spiritual unicorn,<br>Her holy ghost is a spiritual centaur.<br>She rides the clouds and mists,<br>Walks on the snow and ice;</p><p>She is like a rainbow in the sky,<br>A shooting star in space.<br>When she speaks, she is like jade falling;<br>When she acts, she is like a fairy.<br>When she comes into the world,</p><p>She is like the spring coming;<br>When she goes out of the world,<br>She is like autumn fading.</p><p>The saint is like a spiritual phoenix,<br>And all the saints come to see her.<br>They kneel down before her and worship,</p><p>They sing her praises and say:<br>'I am a common man or woman,<br>But I hope to become a saint<br>And with a holy mind,<br>I will go up to the saint<br>And ask her to help me.'</p>"
  },
  {
    "index":44,
    "front":"images/web/45_front.png",
    "back":"images/web/45_back.png",
    "description":"<p>Within the Five Elements of Earth, Fire, Water, Wood, and Metal there is a lack of soil.</p><p>This is said to be because of our ancestors wishing for a good land.</p><p>They had to survive the harsh winters and the rough seas.</p><p>The Chinese built the Great Wall and the Silk Road. They built the Yellow River to bring water to the soil, but it ended up killing the soil.<br> The Chinese still do not have good soil.</p>"
  },
  {
    "index":45,
    "front":"images/web/46_front.png",
    "back":"images/web/46_back.png",
    "description":"<p>Whom can live, but one person cannot escape and die?</p><p>Ten thousand people refer to many people, all of whom can live, but one person cannot escape and die.<br>Whom can live, but one person cannot escape and die?</p><p>Moreover, no knife was used to kill him, which meant that he was liquidated in an extraordinary way that people had never seen before.</p><p>'What a surprise! Just like killing a chicken!' his friend said. 'In practice, the chicken is killed by one blow, and the chicken is not alive, but it is not dead, and it can be resuscitated.'</p><p>'Well, let's see,' he said.</p><p>He picked up the chicken, and the chicken suddenly quivered, and the chicken stood up, and the chicken was still alive.</p>"
  },
  {
    "index":46,
    "front":"images/web/47_front.png",
    "back":"images/web/47_back.png",
    "description":"<p>What is the best way to become a moral person? What are the most effective ways of achieving a safe society?</p><p>Becoming a moral person is the same as being a good person.<br> Everyone has a responsibility, and it is a highly influential task.</p><p>Ziweixing, also known as the Big Dipper, is part of the Ursa Major constellation.<br> This constellation has been used since ancient times as a symbol of greatness,<br>and it has an important meaning in Chinese culture.<br>It represents the highest moral values and is the most influential force in society.<br> It points out the direction, and it determines the trend.</p>"
  },
  {
    "index":47,
    "front":"images/web/48_front.png",
    "back":"images/web/48_back.png",
    "description":"<p>The word 'Zhu' is the surname of the person who was affected by this incident.</p><p>Background info:<br>A person whose surname Zhu was affected by this incident.</p><p>A person whose surname Zhu was affected by this incident.</p><p>'At that time, the society was showing signs of instability.'</p><p>A person whose surname Zhu was affected by this incident.</p><p>A person whose surname Zhu was affected by this incident.</p><p>'Means that this matter was finally resolved peacefully.'</p>"
  },
  {
    "index":48,
    "front":"images/web/49_front.png",
    "back":"images/web/49_back.png",
    "description":"<p>‘THE WORLD IS BROKEN!’<br>A boy screams, his voice hoarse and raspy.</p><p>‘The world is broken. <br>We are all going to die.<br> The gods are angry with us. <br>The gods are angry with China.’</p><p>He is standing on a street corner,<br> the bottom of his pants rolled up,<br> his clothes were worn and tattered. <br>He holds a piece of paper and a cup in his hands.<br> He extends the cup to passersby as he shouts,<br>‘Please, give me money so that I can buy medicine for my sick father!’</p><p>He is not a beggar.<br> He is a boy who has lost everything, <br>who is scared and seeking help.<br>The world is broken.</p><p>‘This is bad,’ says a man in a dark gray suit.<br> He is an important official in Beijing.<br> His face is white and his hands are shaking. <br>No one has ever seen him lose his composure before<br> ‘I think we are going to see a catastrophe<br> I have visited many places and have seen many horrible things.<br> I have seen people lying on the ground and dead bodies floating on the river.<br> I have seen it all. I have seen it all.<br>But nothing has ever made me feel like this.’</p>"
  },
  {
    "index":49,
    "front":"images/web/50_front.png",
    "back":"images/web/50_back.png",
    "description":"<p>The meaning of going to the end.<br>The last round of fortune has come to an end,<br> and it is the beginning of a new round of fortune.</p><p>The meaning of going to the end.<br> The last round of fortune has come to an end, <br>and it is the beginning of a new round of fortune.</p><p>Yuan Henry Zhen also means a cycle of things development and change,<br>such as spring, summer, autumn and winter.</p><p>The meaning of going to the end.<br> The last round of fortune has come to an end,<br> and it is the beginning of a new round of fortune.</p><p>The Meaning Of Going To The End.</p><p>The last round of fortune has come to and end,<br>and it is the beginning of a new round of fortune.</p><p>The Meaning Of Going To The End.</p>"
  },
  {
    "index":50,
    "front":"images/web/51_front.png",
    "back":"images/web/51_back.png",
    "description":"<p>‘Hey, slow down!’<br>Lee did not listen. ‘I tried to warn you. Now you will be in trouble.’</p><p>The little girl's face was furious. ‘Why did not you stop me?’<br>‘You didn’t listen to me. What could I do?’<br>‘It’s my business. Why did you have to interfere?’<br>‘I didn’t want you to get into trouble.’<br>‘You are the one who got me into trouble. You are the one who stopped me from following the Emperor.’<br>‘I didn’t have a choice. What could I do?’<br>‘You could have run with me. If we had run together, we would have been fine. But you wanted to be the big hero.’<br>‘You should be thanking me instead of arguing. You are alive today because of me.’<br>‘I can’t believe you. You think you are such a hero.’<br>‘I am not a hero. I didn’t do anything heroic.’</p><p>The little girl stopped running and turned to face Lee.<br> She was shorter than Lee by a head, but her eyes were filled with a steely determination.<br>‘You think you are not a hero? I was there. I saw it all. It was a miracle!<br>You flew, you were so fast, you were like a cheetah or a leopard.<br>You knew exactly what to do! You saved me!’</p><p>Lee was taken aback. He was not used to being praised.<br>‘I didn’t do anything. I just did what any person would do in that situation.’</p>"
  },
  {
    "index":51,
    "front":"images/web/52_front.png",
    "back":"images/web/52_back.png",
    "description":"<p>The appearance of this metaphorical comet is showing signs that it is unfavorable.</p><p>The red sun is rising in the east,<br>The Party's flag is fluttering in the wind,<br>The Party's army of red warriors is marching forward,<br>The Party's cause of great liberation is unfolding,<br>The Party's policy of great unity is advancing,<br>The people are working hard to build the country,<br> their beloved motherland,<br>The Party's Great East-West Development Strategy is resounding through the universe,<br>Unchecked by any obstacle on the road of peaceful construction,<br>The Chinese people will forge ahead and reach their goal, their final destination,<br>The Chinese nation will be a prosperous and powerful</p>"
  },
  {
    "index":52,
    "front":"images/web/53_front.png",
    "back":"images/web/53_back.png",
    "description":"<p>It is said that Jiang Gong was a scholar under the Eastern Han Dynasty.<br>One day, he was given an assignment to take care of the emperor's horses.<br>On his way, he met a monk on the way.<br> The monk was begging for food, and Jiang Gong gave him a piece of his own.<br> The monk then asked him to join his sect.<br>Jiang Gong was so moved that he became a monk and traveled with the monk.<br> They reached a river where a ferryman was waiting.<br> The ferryman asked them to ride on his boat.<br> The monk agreed but Jiang Gong refused.</p>"
  },
  {
    "index":53,
    "front":"images/web/54_front.png",
    "back":"images/web/54_back.png",
    "description":"<p>In the world of chess, there are also pieces in the game.<br> They are made of wood, and they are clearly painted. <br>They only play one game, and they are never touched again.</p><p>The world is not only the chessboard that refers to,<br>but also the chess pieces that play the chess game.<br>They are always moving, and finally they are not moved again.<br>They are not even touched.</p><p>The world that refers to is not only the chess board, but also the chess pieces.<br>They are all individuals, but they are also a part of the whole.</p>"
  },
  {
    "index":54,
    "front":"images/web/55_front.png",
    "back":"images/web/55_back.png",
    "description":"<p>The Beiyang Fleet</p><p>The Beiyang Fleet was the main modernised navy of the Qing Dynasty.<br>It was also known as the 'Naval forces of the Qing Dynasty.' <br>The Beiyang Fleet's fleet of battleships were the most advanced and powerful ships in the world at the time.<br> The Beiyang Fleet was first created when the Qing Dynasty acquired some warships from<br>the Great Powers after losing the First Sino-Japanese War.<br> The Beiyang Fleet was the strongest navy in Asia until the early 20th century,<br>when Japan defeated China in the First Sino-Japanese War.</p>"
  },
  {
    "index":55,
    "front":"images/web/56_front.png",
    "back":"images/web/56_back.png",
    "description":"<p>A true friend is one who walks in when the rest of the world walks out.</p><p>Background info:<br>Chou's true friend, who walked in when the rest of the world walked out,<br>is the common American soldier. <br>Chou often said that to him,<br>the American soldier was the most loyal and trustworthy friend a man could have.</p>"
  },
  {
    "index":56,
    "front":"images/web/57_front.png",
    "back":"images/web/57_back.png",
    "description":"<p>The rioters were the members of the ‘so-called aristocracy’ who were being denied the right to study.<br>The slogan was ‘overthrow the government if you do not get the right to study’.</p><p>The government used a police force, but riots still happened.<br>This is the government acting in a passive way,<br> meaning that there was no violent reaction.<br> The slogan was 'overthrow the government if you do not get the right to study.''</p><p>This is the face of the government, which was being attacked by the rioters.<br>‘The government tried to stop the riots by using a police force’<br>This is a description of the rioters.<br>‘Members of the so-called aristocracy’ means the people who didn't have the right to get an education.</p><p>‘They denied that they were rich, and asked for the right to study. <br>The government agreed to this agreement, but they did not study.’ <br>This means that the government agreed to the demands of the rioters.<br> This is a good example of passive active writing,<br> because the author makes the rioters sound more violent than they actually were.</p>"
  },
  {
    "index":57,
    "front":"images/web/58_front.png",
    "back":"images/web/58_back.png",
    "description":"<p>The Republic of China was a state that existed from 1912 to 1949<br>over territory now controlled by the People's Republic of China.<br>It was established in January 1912 after the Xinhai Revolution, <br>which overthrew the Qing dynasty, the last imperial dynasty of China.<br> The Republic's first president, Sun Yat-sen,<br>served only briefly before handing over the position to Yuan Shikai,<br>leader of the Beiyang Army. <br>Sun's party, the Kuomintang (KMT), then led by Song Jiaoren, <br>won the parliamentary election held in December 1912. <br>Song Jiaoren was assassinated shortly after and<br>the Beiyang Army led by Yuan Shikai maintained full control of the Beiyang government.<br>Between late 1915 and early 1916, Yuan Shikai tried to reinstate <br>the monarchy before abdicating due to popular unrest.</p>"
  },
  {
    "index":58,
    "front":"images/web/59_front.png",
    "back":"images/web/59_back.png",
    "description":"<p>The ‘Four Noble Truths’ are the central tenets of Buddhism.<br>They consist of:</p><p>Dafa is about ‘Towards Perfection’ and ‘Towards Enlightenment’. <br>Both of which are about selflessness. <br>Dafa is selfless and is a Buddha.<br>Dafa saves people from suffering and saves people from this world.</p><p>Dafa Is 'Towards Perfection' And 'Towards Enlightenment'</p>"
  },
  {
    "index":59,
    "front":"images/web/60_front.png",
    "back":"images/web/60_back.png",
    "description":"<p>‘Circle Of Sun And Moon’  is a homophone to ‘embrace the universe’,<br> and in the novel, it represents an embrace of the universe.<br>In the dictionary, it is defined as ‘complete’.</p><p>The ‘circle of sun and moon’ in the article represents the perfect world.<br> It is a symbol of the universe and the universe is a symbol of perfection.<br> The ‘circle of sun and moon’ is also a symbol of love. <br>The universe is a symbol of the whole, and love is a symbol of the whole.</p>"
  }
];
