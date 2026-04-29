export interface ChapterGuideLocale {
  trend: string
  location: string
  signal: string
  confirmation: string
  invalidation: string
  whyNotMemorize: string
  confusion?: {
    pattern: string
    reason: string
  }
  takeaway: string
}

export interface ChapterGuide {
  en: ChapterGuideLocale
  zh: ChapterGuideLocale
}

export const chapterGuides: Record<string, ChapterGuide> = {
  'part1-ch00-analysis': {
    en: {
      trend: 'The whole chapter is about reading the existing move before trusting any candle.',
      location: 'Support, resistance, and recent swing extremes decide whether a candidate signal matters.',
      signal: 'A candidate candle is only useful once you ask what it says about control, hesitation, or rejection.',
      confirmation: 'The next candle should strengthen the candidate read rather than merely look dramatic.',
      invalidation: 'If price breaks the signal’s key level, update the idea instead of defending the first guess.',
      whyNotMemorize: 'This framework is the reason naming a shape is never enough; the chart has to be read as a sequence.',
      takeaway: 'Candlestick analysis is a process: trend first, then location, then the candle, then confirmation, then failure.',
    },
    zh: {
      trend: '这一章本身就是在训练：先读懂原有走势，再决定某根 K 线值不值得信。',
      location: '支撑、阻力和最近摆动极值，决定了候选信号有没有意义。',
      signal: '候选 K 线真正有用，是因为它透露了控制权、犹豫或拒绝，而不只是外形特殊。',
      confirmation: '后续 K 线应该强化这个候选判断，而不是只在视觉上看起来很大。',
      invalidation: '如果价格破坏了信号的关键位，就该更新判断，而不是替最初的猜测辩护。',
      whyNotMemorize: '这正是“不能只背形态名”的原因：图形必须放进价格发展的顺序里理解。',
      takeaway: '蜡烛图分析是一套顺序：先趋势，再位置，再看 K 线，再等确认，最后观察失效。',
    },
  },
  'part1-ch00-syntax': {
    en: {
      trend: 'Body length and shadow behaviour matter most when they interrupt or extend an existing move.',
      location: 'The same Marubozu or long shadow means more at breakout zones, support, or resistance.',
      signal: 'This chapter teaches the grammar behind candles: who controlled the open, the path, and the close.',
      confirmation: 'Syntax becomes actionable when later candles respect the strength or rejection the candle revealed.',
      invalidation: 'If later candles immediately undo the body or the shadow rejection, the first read weakens.',
      whyNotMemorize: 'Learning candle grammar prevents you from reducing every signal to a canned pattern label.',
      confusion: {
        pattern: 'Marubozu vs long ordinary candle',
        reason: 'The key distinction is whether shadows are truly absent or tiny enough to show near-total session control.',
      },
      takeaway: 'Before memorising named formations, learn what bodies and shadows say about control inside one session.',
    },
    zh: {
      trend: '实体长度和影线行为，只有放进已有走势里看，才知道它是在延续还是打断节奏。',
      location: '同样的光头光脚线或长影线，出现在突破区、支撑或阻力附近时意义会更大。',
      signal: '这一章讲的是 K 线的语法：谁掌控了开盘、盘中路径和收盘。',
      confirmation: '当后续蜡烛继续尊重这根 K 线体现出的强弱或拒绝时，这种语法才会变成可执行信息。',
      invalidation: '如果后续很快把实体或影线拒绝完全抹掉，最初的读法就会减弱。',
      whyNotMemorize: '先学 K 线语法，才能避免把所有信号都简化成死记硬背的形态名字。',
      confusion: {
        pattern: '光头光脚线 vs 普通长实体',
        reason: '关键不在“够不够长”，而在于影线是否几乎消失，从而体现接近整段交易的完全控制。',
      },
      takeaway: '在记住命名形态之前，先学会读懂实体和影线到底在说什么。',
    },
  },
  'part1-ch01-intro': {
    en: {
      trend: 'Even the most basic bullish or bearish candle is only meaningful relative to what price was doing already.',
      location: 'Single candles are weakest in the middle of noise and strongest at important transition zones.',
      signal: 'The core signal is simple: where did price open, where did it close, and who controlled the session?',
      confirmation: 'A single bullish or bearish candle gains meaning when the next candle continues the same control shift.',
      invalidation: 'If the next session fully reverses the candle, treat the first read as weak evidence.',
      whyNotMemorize: 'Calling something a green or red candle tells you almost nothing without context and follow-through.',
      confusion: {
        pattern: 'Bullish candle vs bullish signal',
        reason: 'A green candle inside a larger downtrend is not automatically a reversal; it may only be a pause or bounce.',
      },
      takeaway: 'A candle colour is description, not analysis.',
    },
    zh: {
      trend: '最基础的阳线或阴线，也只有放进已有走势里才有意义。',
      location: '单根 K 线出现在噪音中最弱，出现在转折位附近才更值得重视。',
      signal: '最核心的问题很简单：它怎么开、怎么收、谁主导了这一段交易。',
      confirmation: '单根阳线或阴线要变得有意义，需要后续 K 线继续支持同方向的控制权变化。',
      invalidation: '如果下一交易日就把它完全反过来，第一根 K 线只能算弱证据。',
      whyNotMemorize: '只知道“这是阳线/阴线”几乎不等于分析，因为你还不知道背景和跟随。',
      confusion: {
        pattern: '阳线 vs 看涨信号',
        reason: '下跌趋势里的一根阳线，不一定代表反转，也可能只是短暂喘息或反抽。',
      },
      takeaway: '颜色只是描述，不是分析本身。',
    },
  },
  'part1-ch02-doji': {
    en: {
      trend: 'Doji matters most after a clear prior trend, because indecision only matters when conviction existed first.',
      location: 'Top-side Doji, bottom-side Doji, and Doji at support/resistance each carry different implications.',
      signal: 'The shape says equilibrium: price moved, but neither side kept control into the close.',
      confirmation: 'Use the next candle to decide whether the Doji was a real warning or just a brief pause.',
      invalidation: 'A strong breakout beyond the Doji extreme cancels the warning and restores prior momentum.',
      whyNotMemorize: 'Memorising “Doji = reversal” is wrong; Doji is a warning that still needs context and follow-through.',
      confusion: {
        pattern: 'Doji vs Spinning Top',
        reason: 'The key distinction is the real body. A true Doji closes at or extremely near the open; a spinning top still has a visible body.',
      },
      takeaway: 'Doji is indecision first, reversal only after context and confirmation agree.',
    },
    zh: {
      trend: '十字星只有放在清晰趋势之后才最有意义，因为“犹豫”必须先建立在原本有明确动能的前提上。',
      location: '顶部十字星、底部十字星，以及支撑阻力位附近的十字星，含义并不一样。',
      signal: '这个形状表达的是平衡：价格虽然波动过，但收盘前没有一方守住控制权。',
      confirmation: '要用下一根 K 线判断它是有效预警，还是只是短暂停顿。',
      invalidation: '如果价格强势突破十字星极值方向，原本的预警就会失效，前趋势也会被恢复。',
      whyNotMemorize: '死记“十字星 = 反转”是错误的；十字星先是预警，只有背景和跟随配合时才升级成反转信息。',
      confusion: {
        pattern: '十字星 vs 纺锤线',
        reason: '关键区别在实体。真正的十字星收盘应与开盘极接近，而纺锤线仍然保留可见实体。',
      },
      takeaway: '十字星先代表犹豫，只有在背景和确认都支持时，才值得当作反转看。',
    },
  },
  'part1-ch03-hammer': {
    en: {
      trend: 'The same candle means Hammer after a decline and Hanging Man after an advance.',
      location: 'The lower shadow matters most when it forms at a prior low, support zone, or after an extended move.',
      signal: 'The signal is rejection of lower prices: sellers pushed, but could not hold the low into the close.',
      confirmation: 'Hammer wants bullish follow-through; Hanging Man wants bearish follow-through.',
      invalidation: 'If price quickly breaks below the Hammer low or above the Hanging Man high, the read weakens.',
      whyNotMemorize: 'Shape alone is not enough here; location in trend is what decides whether the signal is bullish or bearish.',
      confusion: {
        pattern: 'Hammer vs Hanging Man',
        reason: 'They are identical in silhouette. The only meaningful difference is whether they appear after decline or rally.',
      },
      takeaway: 'A lower shadow is a rejection signal, but trend location decides whose signal it is.',
    },
    zh: {
      trend: '同样一根 K 线，放在下跌后叫锤子线，放在上涨后就变成上吊线。',
      location: '长下影只有出现在前低、支撑区或一段延伸走势末端时，价值才最大。',
      signal: '这个信号表达的是低位拒绝：空方虽然把价格压下去，但没能把低位保持到收盘。',
      confirmation: '锤子线需要后续偏多确认；上吊线需要后续偏空确认。',
      invalidation: '如果价格很快跌破锤子线低点，或突破上吊线高点，原判断就会减弱。',
      whyNotMemorize: '这里最不能只看外形；真正决定多空方向的是它出现在哪一段趋势里。',
      confusion: {
        pattern: '锤子线 vs 上吊线',
        reason: '两者外观完全一样，真正有意义的区别只有一个：它出现在下跌后还是上涨后。',
      },
      takeaway: '长下影说明发生过拒绝，但趋势位置决定这次拒绝到底偏多还是偏空。',
    },
  },
  'part1-ch04-star': {
    en: {
      trend: 'Shooting Star belongs to an uptrend top; Inverted Hammer belongs to a downtrend bottom.',
      location: 'Upper-shadow rejection is strongest at resistance, exhaustion highs, or after repeated bullish expansion.',
      signal: 'The signal is failed upside control: buyers pushed up but could not defend the close.',
      confirmation: 'Shooting Star needs weakness next; Inverted Hammer needs strength next.',
      invalidation: 'A breakout above the upper shadow weakens the bearish read; a failure to reclaim the body weakens the bullish read.',
      whyNotMemorize: 'A long upper shadow is not enough by itself; you still need trend context and follow-through.',
      confusion: {
        pattern: 'Shooting Star vs Inverted Hammer',
        reason: 'They are the same shape. The difference is whether upside rejection happens after a rally or after a selloff.',
      },
      takeaway: 'Upper-shadow rejection is the clue, but context decides whether it warns of topping or bottoming.',
    },
    zh: {
      trend: '射击之星属于上涨末端，倒锤子线属于下跌末端。',
      location: '长上影的拒绝，出现在阻力位、衰竭高点或连续拉升之后时最强。',
      signal: '这个信号表达的是上冲失败：买方曾把价格推高，但没能把高位守到收盘。',
      confirmation: '射击之星要等后续走弱；倒锤子线要等后续走强。',
      invalidation: '如果价格突破上影高点，看跌读法会减弱；如果倒锤子后续无法收回实体，看涨读法会减弱。',
      whyNotMemorize: '只看到长上影远远不够；仍然必须回到趋势背景和后续蜡烛上判断。',
      confusion: {
        pattern: '射击之星 vs 倒锤子线',
        reason: '两者形状相同，真正区别只在于这种上冲失败发生在上涨后，还是发生在下跌后。',
      },
      takeaway: '长上影提示上冲失败，但真正的多空含义仍由背景决定。',
    },
  },
  'part2-ch05-engulfing': {
    en: {
      trend: 'Engulfing works best after a directional run where one side already looks committed.',
      location: 'The pattern is strongest at exhaustion extremes or near support and resistance.',
      signal: 'One session fully overwhelms the prior real body, signalling a fast control transfer.',
      confirmation: 'Follow-through should respect the engulfing body rather than immediately undo it.',
      invalidation: 'If the next candle erases the engulfing body, the control shift was probably temporary.',
      whyNotMemorize: '“One candle swallowed another” is not enough; you still need to know whether the market was extended and whether the reversal held.',
      confusion: {
        pattern: 'Engulfing vs Piercing / Dark Cloud',
        reason: 'Piercing and Dark Cloud reclaim only part of the prior body; true engulfing wipes out the entire prior real body.',
      },
      takeaway: 'Engulfing is strongest when a full-body reversal also survives the next few candles.',
    },
    zh: {
      trend: '吞没形态最适合出现在已有方向推进之后，也就是一方原本已经看起来很有把握的时候。',
      location: '它在衰竭区、支撑或阻力附近最强。',
      signal: '后一交易日用完整实体压过前一日实体，表达的是快速控制权转移。',
      confirmation: '后续走势应该继续尊重这根吞没实体，而不是立刻把它抹掉。',
      invalidation: '如果下一根很快把吞没实体完全吃回去，这次控制权切换大概率只是暂时的。',
      whyNotMemorize: '“后一根把前一根吞掉了”还不够；你还得知道市场是否已经延伸，以及反转有没有被后续保留下来。',
      confusion: {
        pattern: '吞没 vs 刺透 / 乌云盖顶',
        reason: '刺透和乌云盖顶只收回前一根实体的一部分，真正的吞没则是把前一根实体完整抹掉。',
      },
      takeaway: '吞没真正有价值的地方，不只是包住前一根，而是它代表的控制权转移还被后续蜡烛保住了。',
    },
  },
  'part2-ch06-cloud': {
    en: {
      trend: 'Dark Cloud Cover and Piercing Pattern both depend on a prior trend being stretched enough to reverse.',
      location: 'They are most useful near short-term exhaustion zones, especially when price reacts around known levels.',
      signal: 'The second candle does not fully engulf; it reclaims or loses enough of the prior body to change momentum quality.',
      confirmation: 'Watch whether later candles build on the midpoint reclaim or midpoint rejection.',
      invalidation: 'If later price undoes the second candle quickly, treat the pattern as weak or incomplete.',
      whyNotMemorize: 'These patterns teach nuance: partial reclaim can still matter, but only when context and follow-through support it.',
      confusion: {
        pattern: 'Piercing / Dark Cloud vs Engulfing',
        reason: 'The midpoint is the key threshold here. If the second candle fully swallows the first body, you have engulfing instead.',
      },
      takeaway: 'Midpoint control can be enough to change momentum, even when the first body is not fully erased.',
    },
    zh: {
      trend: '乌云盖顶和刺透形态都依赖于前一段走势已经延伸到足以出现反转或衰竭。',
      location: '它们在短线衰竭区最有用，尤其是价格刚好在已知关键位附近反应时。',
      signal: '第二根 K 线没有完整吞没前一根，而是通过“收不收回中点”来改变动能质量。',
      confirmation: '关键要看后续蜡烛是否继续强化这种中点收回或中点压回。',
      invalidation: '如果后续很快把第二根 K 线的意义完全抹掉，就该把这个形态视为偏弱或未完成。',
      whyNotMemorize: '这组形态教你的不是死记，而是理解“部分收回”在正确背景下也能改变节奏。',
      confusion: {
        pattern: '刺透 / 乌云盖顶 vs 吞没',
        reason: '这里最关键的是中点。如果第二根把前一根实体完整吞掉，那就应该读成吞没，而不是刺透或乌云盖顶。',
      },
      takeaway: '即便没有完全吞没，只要中点控制权发生改变，市场节奏也可能已经变了。',
    },
  },
  'part2-ch07-stars': {
    en: {
      trend: 'Star patterns need a clear prior move so the pause candle has something meaningful to interrupt.',
      location: 'They matter most near the end of directional pushes, especially around visible exhaustion zones.',
      signal: 'The star candle marks hesitation; the third candle decides whether hesitation became reversal.',
      confirmation: 'The third candle should close deep enough into the first body to prove real sentiment change.',
      invalidation: 'If the third candle is weak or later price reverses it quickly, the star remains only a warning.',
      whyNotMemorize: 'The middle candle is not the story by itself; star patterns are about sequence, not silhouette alone.',
      confusion: {
        pattern: 'Morning / Evening Star vs Doji warning',
        reason: 'A single Doji warns; a completed star becomes actionable only once the third candle confirms the transition.',
      },
      takeaway: 'In star patterns, the pause candle is the pivot, but the confirmation candle finishes the job.',
    },
    zh: {
      trend: '星线形态需要先有清晰趋势，这样中间那根犹豫 K 线才真正值得重视。',
      location: '它们通常出现在方向推进末端，尤其是肉眼可见的衰竭区附近时最有意义。',
      signal: '星线本身只是停顿信号；第三根 K 线才决定这种停顿有没有升级成反转。',
      confirmation: '第三根 K 线应该足够深入第一根实体内部，才能证明情绪真的切换了。',
      invalidation: '如果第三根很弱，或者后续很快把它反过来，星线就只能算预警。',
      whyNotMemorize: '只盯住中间那根小实体是远远不够的；星线家族讲的是顺序，而不是单一外形。',
      confusion: {
        pattern: '晨星 / 暮星 vs 单根十字预警',
        reason: '单根十字只是预警；只有第三根 K 线补上确认，整组星线结构才真正可执行。',
      },
      takeaway: '星线的关键不是中间那根像不像，而是第三根有没有把停顿升级成反转。',
    },
  },
  'part2-ch08-harami': {
    en: {
      trend: 'Harami matters after expansion, because the small inside body shows the prior momentum has lost cleanliness.',
      location: 'It is most useful near trend extremes or where the market should either continue strongly or begin hesitating.',
      signal: 'The second candle fits inside the prior body, signalling contraction and loss of one-sided control.',
      confirmation: 'Because Harami is softer than Engulfing, later confirmation is especially important.',
      invalidation: 'If price immediately resumes the old trend with strong closes, treat the inside candle as simple pause.',
      whyNotMemorize: 'Harami is not a forceful reversal by default; it is often the start of hesitation that still needs proof.',
      confusion: {
        pattern: 'Harami vs Engulfing',
        reason: 'In Harami the second candle stays inside the first body. In Engulfing the second candle destroys the first body.',
      },
      takeaway: 'Harami is a warning that momentum has compressed, not proof that reversal has already won.',
    },
    zh: {
      trend: '孕线最有意义的时候，是前一段走势已经扩张过，而后一根小实体开始显示原本的单边动能不再干净。',
      location: '它通常出现在趋势极端位置，或者本该继续发力却开始犹豫的地方。',
      signal: '第二根实体包在第一根实体内部，表达的是波动收缩和单边控制权减弱。',
      confirmation: '因为孕线比吞没更柔和，所以后续确认尤其重要。',
      invalidation: '如果价格立刻用强势收盘恢复旧趋势，那这个内包结构更像普通停顿。',
      whyNotMemorize: '孕线默认不是强反转，它更常见的是“开始犹豫”，后面还得等证据。',
      confusion: {
        pattern: '孕线 vs 吞没',
        reason: '孕线是后者待在前者里面；吞没则是后者把前者整个吃掉，力度完全不同。',
      },
      takeaway: '孕线最重要的意义，是告诉你原趋势开始收缩，而不是马上宣布反转完成。',
    },
  },
  'part2-ch09-tweezers': {
    en: {
      trend: 'Tweezers become meaningful when the market is already extended into a level worth defending.',
      location: 'Their whole value comes from repeated tests of the same high or low zone.',
      signal: 'Shared highs or lows reveal that supply or demand is showing up at a specific level twice.',
      confirmation: 'The follow-through after the second rejection decides whether the repeated level was truly important.',
      invalidation: 'A quick recapture of the level weakens the case that the level was defended.',
      whyNotMemorize: 'Tweezers are not just “two equal candles.” They are repeated failure at a shared level.',
      confusion: {
        pattern: 'Tweezers vs random similar highs/lows',
        reason: 'The second touch has to fail in a way that shows the level is active, not just numerically close by coincidence.',
      },
      takeaway: 'Repeated price rejection at the same level matters more than the candle label attached to it.',
    },
    zh: {
      trend: '镊子形态只有在市场已经推进到一个值得防守的价位时，才真正有意义。',
      location: '它的全部价值都来自对同一高位或低位区域的重复测试。',
      signal: '共享高点或低点说明，供给或需求在同一个价格区域连续两次出现。',
      confirmation: '第二次拒绝之后有没有后续跟随，决定了这个共享价位到底重不重要。',
      invalidation: '如果价格很快重新收回那个价位，就说明这个水平未必真的被防守住。',
      whyNotMemorize: '镊子形态不是“两根差不多高/低的 K 线”这么简单，它真正表达的是共享关键位上的重复失败。',
      confusion: {
        pattern: '镊子形态 vs 偶然接近的高低点',
        reason: '第二次测试必须以一种能体现该水平正在生效的方式失败，而不是仅仅数值碰巧接近。',
      },
      takeaway: '真正重要的是同一价位被两次拒绝，而不是“镊子”这个名字本身。',
    },
  },
  'part2-ch10-three': {
    en: {
      trend: 'Three-candle soldier/crow patterns belong after the market has already been leaning hard one way and then transitions.',
      location: 'They are strongest after exhaustion or after a break from an important level.',
      signal: 'Three consecutive directional candles show persistent control, not just a one-session burst.',
      confirmation: 'The sequence itself is strong, but later candles should still avoid immediately snapping back through it.',
      invalidation: 'If the market erases much of the three-candle run quickly, the sequence was more emotional than durable.',
      whyNotMemorize: 'Three candles in a row are not enough by themselves; what matters is whether they appear after the right context and hold.',
      confusion: {
        pattern: 'Three White Soldiers / Black Crows vs normal trend continuation',
        reason: 'These patterns matter most when they appear as a transition from weakness or strength, not when they simply sit in the middle of an already mature run.',
      },
      takeaway: 'A three-candle sequence is strongest when it shows sustained control emerging from a prior turning zone.',
    },
    zh: {
      trend: '三兵/三鸦形态通常要放在市场原本已经明显偏向一边、随后开始切换的背景里看。',
      location: '它们在衰竭区，或者刚从重要关键位切换出来时最强。',
      signal: '连续三根同方向实体，表达的是持续控制权，而不只是一天的情绪爆发。',
      confirmation: '三根本身已经不弱，但后续仍然不该立刻把这三根的大部分成果完全回吐。',
      invalidation: '如果市场很快把三根序列的大部分区间抹掉，说明这段走势更情绪化，而不够耐久。',
      whyNotMemorize: '连续三根并不自动等于强信号；关键还是它出现在什么背景，以及后面能不能守住。',
      confusion: {
        pattern: '三白兵 / 三只乌鸦 vs 普通趋势延续',
        reason: '这些形态最重要的是它们出现在转折区或切换区，而不是单纯位于成熟趋势中段。',
      },
      takeaway: '三根连续蜡烛最有价值的时候，是它们在关键切换区里表现出持续控制权。',
    },
  },
  'part3-ch11-windows': {
    en: {
      trend: 'Windows are best read as continuation unless later price clearly fills and rejects the gap.',
      location: 'A gap at a key breakout or breakdown area is more meaningful than one inside noisy trading.',
      signal: 'The empty space itself becomes the signal: it marks urgency and imbalance between sessions.',
      confirmation: 'Continuation bias strengthens when later candles respect the open window instead of filling it immediately.',
      invalidation: 'If price quickly closes the gap and keeps going through it, the continuation read weakens.',
      whyNotMemorize: 'A gap is not automatically bullish or bearish; you still need to know whether the market defended the window afterward.',
      confusion: {
        pattern: 'Window vs exhaustion gap',
        reason: 'A continuation window stays open or mostly respected. An exhaustion gap gets filled and reversed much faster.',
      },
      takeaway: 'The real question after a window is not “did a gap appear?” but “did the market defend the gap?”',
    },
    zh: {
      trend: '窗口通常优先按延续读，除非后续价格很快补掉并反向推进。',
      location: '关键突破/跌破区域出现的跳空，比噪音区里的跳空更有意义。',
      signal: '这里真正的信号是那段空白本身，它代表了跨交易日的急迫和失衡。',
      confirmation: '如果后续蜡烛继续尊重这个窗口而不是立刻回补，延续读法会更强。',
      invalidation: '如果价格迅速把跳空补完并继续穿过去，原本的延续判断就会减弱。',
      whyNotMemorize: '跳空本身并不自动看涨或看跌；你仍然要观察市场后来有没有真正防守这个窗口。',
      confusion: {
        pattern: '窗口 vs 衰竭缺口',
        reason: '延续窗口通常会保持打开或大体被尊重；衰竭缺口则更容易被快速回补并反向穿越。',
      },
      takeaway: '看窗口时最重要的问题不是“有没有 gap”，而是“市场后来有没有守住它”。',
    },
  },
  'part3-ch12-three-methods': {
    en: {
      trend: 'Three Methods only make sense when a strong existing trend pauses without truly surrendering control.',
      location: 'They are best read mid-trend, not at exhaustion extremes where reversal risk is already high.',
      signal: 'Small countertrend candles inside a larger impulse show consolidation rather than real reversal.',
      confirmation: 'The final directional candle should break out of the consolidation and restore the dominant trend.',
      invalidation: 'If price escapes the consolidation in the opposite direction, the continuation idea fails.',
      whyNotMemorize: 'Several small opposite candles do not automatically mean reversal; inside a strong trend they often mean rest.',
      confusion: {
        pattern: 'Three Methods vs reversal base/top',
        reason: 'Continuation structure keeps the pullback contained inside the range of the larger impulse candle before trend resumes.',
      },
      takeaway: 'Three Methods teaches that not every opposite candle interrupts trend; some only reset it.',
    },
    zh: {
      trend: '三法形态只有在强趋势中途出现暂歇、但主导权并未真正交出去时，才有意义。',
      location: '它更适合被放在趋势中段理解，而不是已经接近衰竭的极端位置。',
      signal: '几根逆向小实体待在大趋势脉冲内部，表达的是整理，不是真正反转。',
      confirmation: '最后那根顺趋势 K 线应当重新突破整理区，把主导趋势接回来。',
      invalidation: '如果价格朝相反方向逃离整理区，原本的延续判断就失败了。',
      whyNotMemorize: '几根反向小蜡烛并不自动等于反转；在强趋势里，它们很多时候只是休息。',
      confusion: {
        pattern: '三法形态 vs 反转底/顶',
        reason: '真正的延续结构，会把中间整理限制在大趋势脉冲范围内，然后再由最后一根恢复原方向。',
      },
      takeaway: '三法形态教你：不是每根反向蜡烛都在改变趋势，有些只是重置趋势。',
    },
  },
  'part4-ch13-western': {
    en: {
      trend: 'Western confluence works best when candlestick signals appear after a clear directional move into a known zone.',
      location: 'This chapter is all about location: support, resistance, trendline, moving average, retracement, and gap zones.',
      signal: 'The candlestick reveals behaviour at the level; the western tool explains why that level should matter.',
      confirmation: 'Confirmation comes when later price respects the same level rather than immediately negating it.',
      invalidation: 'If price slices cleanly through the level after the signal, the confluence was weak or mistimed.',
      whyNotMemorize: 'This chapter is the strongest proof that shape alone is not enough; level plus behaviour is what creates conviction.',
      confusion: {
        pattern: 'Strong candlestick vs strong trade location',
        reason: 'A beautiful signal in the middle of nowhere is often weaker than a merely decent signal at an obviously important level.',
      },
      takeaway: 'Candlesticks tell you how price behaved; western structure tells you why that behaviour matters there.',
    },
    zh: {
      trend: '东西方共振最有价值的时候，是价格先沿某个方向推进，再进入一个已知关键区。',
      location: '这一章本质上讲的就是位置：支撑、阻力、趋势线、均线、回撤位和缺口区域。',
      signal: '蜡烛图负责揭示价格在这个位置上的行为，西方工具负责解释为什么这个位置值得重视。',
      confirmation: '只有后续价格继续尊重同一个关键位，共振信号才算真正站得住。',
      invalidation: '如果价格在信号出现后干净利落穿过这个水平，那这次共振就偏弱或偏早。',
      whyNotMemorize: '这一章最能证明：形状本身不够，真正带来把握的是“关键位 + 行为”一起成立。',
      confusion: {
        pattern: '强蜡烛图 vs 强交易位置',
        reason: '出现在“中间地带”的漂亮形态，往往还不如出现在明显关键位上的普通形态更可用。',
      },
      takeaway: '蜡烛图告诉你价格怎么表现，西方结构告诉你为什么这个表现恰好发生在重要位置。',
    },
  },
  'part2-ch14-special-reversals': {
    en: {
      trend: 'These families only matter after a trend has stretched enough that a discontinuity would be meaningful.',
      location: 'They belong near exhaustion zones, not inside random mid-range noise.',
      signal: 'The key signal is a break in continuity: isolated Doji, repeated stalls, or an abrupt opposite gap.',
      confirmation: 'You want the next candle to continue the handoff rather than immediately refill the gap or erase the stall.',
      invalidation: 'If price quickly re-enters the old flow and removes the gap logic, the pattern quality collapses.',
      whyNotMemorize: 'These are rare patterns, so forcing the label is much more dangerous than missing one clean example.',
      confusion: {
        pattern: 'Rare specialist pattern vs ordinary gap noise',
        reason: 'Without clean isolation or a decisive control transfer, you usually do not have the real family.',
      },
      takeaway: 'With rare reversal families, the discontinuity matters more than the name.',
    },
    zh: {
      trend: '这组家族只有在趋势已经拉伸到足以发生“断裂式切换”时才真正有意义。',
      location: '它们更适合放在衰竭区附近理解，而不是区间中部的随机噪音里。',
      signal: '真正的信号是连续性被打断：被隔离的 Doji、连续停滞，或突然反向跳空。',
      confirmation: '最好看到后续继续完成这次控制权切换，而不是立刻把缺口回补、把停滞抹掉。',
      invalidation: '如果价格迅速回到旧节奏并破坏跳空逻辑，这组形态的质量就会明显下降。',
      whyNotMemorize: '这类形态本来就少见，所以“硬套名字”的风险，往往比错过一两个干净案例更大。',
      confusion: {
        pattern: '罕见专用形态 vs 普通跳空噪音',
        reason: '只要隔离或控制权换手不够干净，通常就还不算真正的这一类家族。',
      },
      takeaway: '读这组稀有反转时，最重要的是连续性断裂，而不是名字本身。',
    },
  },
  'part2-ch15-line-reversals': {
    en: {
      trend: 'These patterns are most useful after a directional push into a level where memory should matter.',
      location: 'Repeated opens, closes, highs, or lows are the entire story, so location is critical.',
      signal: 'The signal is not complexity. It is price returning to or defending a very specific level.',
      confirmation: 'Confirmation means the repeated level actually triggers follow-through on the next session.',
      invalidation: 'If the repeated level is taken out immediately, the pattern was descriptive but not actionable.',
      whyNotMemorize: 'Line patterns look simple, but without a meaningful repeated level they are just coincidental candles.',
      confusion: {
        pattern: 'Matching level vs accidental similar print',
        reason: 'The level has to behave like a defended reference, not just happen to be numerically close.',
      },
      takeaway: 'In line reversals, price memory at a shared level matters more than the candle silhouette.',
    },
    zh: {
      trend: '这组形态最适合放在一段方向推进之后，再去观察某个价位记忆是否开始起作用。',
      location: '重复的开盘、收盘、高点或低点就是故事本身，所以位置非常关键。',
      signal: '真正的信号不是复杂外形，而是价格反复回到或防守某个很具体的水平。',
      confirmation: '只有下一交易日真的沿这个共享价位继续跟随，形态才算被确认。',
      invalidation: '如果这个重复价位立刻被穿透，形态就更像描述而不是可执行信号。',
      whyNotMemorize: '这组线型形态看起来简单，但没有真正重要的共享价位时，它们往往只是巧合。',
      confusion: {
        pattern: '共享价位 vs 偶然接近',
        reason: '关键位必须表现出“正在被防守”的行为，而不是数值恰好差不多。',
      },
      takeaway: '线型反转里最重要的，不是外形，而是共享价位上的价格记忆。',
    },
  },
  'part2-ch16-neck-and-breakaway': {
    en: {
      trend: 'This chapter assumes the prior trend is still active and asks whether the bounce quality is enough to cancel it.',
      location: 'These patterns work around prior lows, gap zones, and recent impulse bodies.',
      signal: 'The key read is how deeply countertrend price can reclaim the prior session before sellers return.',
      confirmation: 'Continuation improves when the next candle restores the original direction from that reclaimed area.',
      invalidation: 'If the bounce keeps reclaiming deeper and starts closing beyond the supposed continuation zone, the pattern fails.',
      whyNotMemorize: 'These names exist to compare degrees of recovery. Without that comparison, the labels teach very little.',
      confusion: {
        pattern: 'Continuation bounce vs actual reversal',
        reason: 'The difference is whether the recovery only tests the prior body or truly takes control above it.',
      },
      takeaway: 'On-Neck, In-Neck, and Thrusting are best read as a spectrum of bounce quality, not as isolated labels.',
    },
    zh: {
      trend: '这一章默认原趋势还活着，真正要判断的是：反抽质量够不够强，强到足以取消它。',
      location: '它们通常围绕前低、缺口区和最近脉冲实体展开。',
      signal: '关键不是名字，而是逆势反抽究竟收回了前一根多少空间，随后卖盘又多快回来。',
      confirmation: '如果下一根很快从那个回收区重新恢复原方向，延续读法会更强。',
      invalidation: '如果反抽继续深入，开始收在本该维持的延续区之上，这组形态就失效了。',
      whyNotMemorize: '这组名字本来就是为了比较“恢复了多少”。脱离这个比较，记名字意义不大。',
      confusion: {
        pattern: '延续型反抽 vs 真正反转',
        reason: '关键区别在于它只是测试前一根实体，还是已经真正收回并夺回控制权。',
      },
      takeaway: '读这组形态时，要把它们当成“反抽质量光谱”，而不是互不相干的标签。',
    },
  },
  'part2-ch17-advanced-structures': {
    en: {
      trend: 'These structures appear after prolonged directional movement where momentum quality starts decaying.',
      location: 'They matter most near obvious extremes where the trend should either accelerate or finally hesitate.',
      signal: 'The signal is deterioration: smaller progress, visible stalls, or exhaustion followed by repair.',
      confirmation: 'The reversal becomes actionable only when later candles prove the old push can no longer recover.',
      invalidation: 'If the old trend resumes with fresh expansion, the apparent deterioration was only temporary.',
      whyNotMemorize: 'These patterns exist to train your eye on sequence quality, not to give you another one-candle shortcut.',
      confusion: {
        pattern: 'Weakening advance vs healthy pause',
        reason: 'The question is whether each new push is losing range and authority, or just resting briefly before continuing.',
      },
      takeaway: 'Advanced structures are about momentum quality decay across a sequence, not one dramatic candle.',
    },
    zh: {
      trend: '这组结构通常出现在一段已经走久了的单边走势里，核心是推进质量开始恶化。',
      location: '它们最适合放在明显极端位附近理解，因为那种地方本该继续加速，或者终于开始停顿。',
      signal: '真正的信号是“质量衰减”：推进变短、停顿更明显，或衰竭后开始修复。',
      confirmation: '只有后续 K 线证明旧方向无法重新恢复，反转读法才真正成立。',
      invalidation: '如果旧趋势用新的扩张重新接回去，之前看到的恶化就更像临时休息。',
      whyNotMemorize: '这组形态的目的，是训练你识别顺序里的质量变化，而不是再给你一根 K 线捷径。',
      confusion: {
        pattern: '推进转弱 vs 健康整理',
        reason: '关键要看每一次新推进是不是在失去范围和权威，还是只是短暂喘息后准备继续。',
      },
      takeaway: '高级结构看的不是某一根，而是一整段推进质量如何一步步衰减。',
    },
  },
  'part3-ch18-gap-continuations': {
    en: {
      trend: 'These patterns assume the dominant trend remains healthy enough that pullbacks should stay controlled.',
      location: 'Open gaps, impulse bodies, and prior breakout zones define the continuation battlefield.',
      signal: 'The market pauses or retraces, but never deeply enough to reclaim the structure that should stay intact.',
      confirmation: 'You want the breakout or trend-resumption candle to restart from inside the preserved structure.',
      invalidation: 'If the gap or impulse body is fully retraced, the continuation logic weakens sharply.',
      whyNotMemorize: 'Continuation patterns are easiest to overcall. Their value comes from how well the pullback stayed contained.',
      confusion: {
        pattern: 'Healthy continuation pause vs trend failure',
        reason: 'The line is usually depth: once the retrace takes back too much, it stops being a controlled pause.',
      },
      takeaway: 'In continuation families, the pullback quality is the pattern.',
    },
    zh: {
      trend: '这组形态默认主趋势还足够健康，因此中途回撤应该保持受控。',
      location: '未回补缺口、大脉冲实体和前突破区，构成了延续判断的战场。',
      signal: '市场会停顿、会回撤，但回撤深度不足以收回本该保持完整的结构。',
      confirmation: '理想的确认，是后续那根恢复趋势的蜡烛能从这个被保存住的结构里重新起跑。',
      invalidation: '如果缺口或大脉冲实体被完全收回，延续逻辑就会明显减弱。',
      whyNotMemorize: '持续形态最容易被过度解读；它们真正的价值，在于你能否看出回撤被控制得够不够好。',
      confusion: {
        pattern: '健康整理 vs 趋势失败',
        reason: '分界线通常就是回撤深度：一旦收回过多，它就不再是受控整理。',
      },
      takeaway: '对持续形态来说，回撤质量本身就是形态。',
    },
  },
  'part4-ch19-volume': {
    en: {
      trend: 'Volume is most informative when price is already arriving at a place where a decision matters.',
      location: 'Support, resistance, gap edges, and breakout pivots are where volume confirmation becomes most useful.',
      signal: 'The candle tells you what price did; volume tells you how committed the market was while it did it.',
      confirmation: 'Expanding volume on the confirmation candle usually matters more than volume on the setup candle alone.',
      invalidation: 'If the supposed signal appears on weak participation and then stalls, reduce your confidence quickly.',
      whyNotMemorize: 'Volume should modify conviction, not replace context. A noisy spike with no structural reason is not enough.',
      confusion: {
        pattern: 'High volume vs useful volume',
        reason: 'Useful volume appears where the chart already had a reason to matter, not just anywhere activity increased.',
      },
      takeaway: 'Volume is a confidence layer on top of price behaviour, not a substitute for it.',
    },
    zh: {
      trend: '量能最有价值的时候，是价格已经走到了一个本来就该发生选择的位置。',
      location: '支撑、阻力、缺口边缘和突破枢纽，都是量能确认最有用的地方。',
      signal: '蜡烛图负责回答“价格做了什么”，量能负责回答“市场当时参与得有多认真”。',
      confirmation: '确认蜡烛上的放量，通常比候选信号当天单独放量更重要。',
      invalidation: '如果所谓信号本来就参与度很弱，随后又开始发软，就应该迅速下调信心。',
      whyNotMemorize: '量能是修正信心的工具，不是替代上下文的工具。单独一根放量而没有结构理由，远远不够。',
      confusion: {
        pattern: '高量 vs 有用的量',
        reason: '真正有用的量，必须出现在图表本来就有理由重要的位置，而不是随便哪个活跃时段。',
      },
      takeaway: '量能是叠加在价格行为之上的信心层，不是它的替代品。',
    },
  },
  'part4-ch20-context-comparisons': {
    en: {
      trend: 'This chapter deliberately compares the same or mirrored candles against different directional backgrounds.',
      location: 'Location is the point: support, resistance, and middle-of-range copies should not be read as equal.',
      signal: 'The candle shape is only the starting clue; the surrounding context decides whether it deserves weight.',
      confirmation: 'Good-context signals usually get cleaner follow-through because the level and the behaviour agree.',
      invalidation: 'If the location does not support the story, the candle often dies quickly even if the shape looked perfect.',
      whyNotMemorize: 'This is the direct antidote to shape memorisation: same candle, different meaning.',
      confusion: {
        pattern: 'Beautiful candle vs meaningful candle',
        reason: 'A visually clean setup can still be low-quality if the surrounding location gives it no reason to matter.',
      },
      takeaway: 'Context decides whether a pattern deserves attention; shape alone does not.',
    },
    zh: {
      trend: '这一章故意把相同或镜像的蜡烛，放进不同的方向背景里做对比。',
      location: '位置就是重点：支撑、阻力和区间中部的复制品，绝不能当成同等信号去读。',
      signal: '蜡烛外形只是线索起点，真正决定它值不值得重视的是周围上下文。',
      confirmation: '当位置和行为一致时，后续跟随通常更干净。',
      invalidation: '如果位置本身不支持这套故事，即便形状看起来再漂亮，也往往会很快失效。',
      whyNotMemorize: '这是对抗“只背形状”的最直接一课：同样的蜡烛，在不同背景里会有不同意义。',
      confusion: {
        pattern: '漂亮蜡烛 vs 有意义蜡烛',
        reason: '视觉上很干净的 setup，如果周围位置没有给它理由，它仍然可能是低质量信号。',
      },
      takeaway: '真正决定形态值不值得看的，是上下文，而不是外形本身。',
    },
  },
  'part4-ch21-confluence-lab': {
    en: {
      trend: 'Confluence works best when the trend has already delivered price into a pre-defined decision zone.',
      location: 'This chapter is entirely about stacked location evidence: trendline, average, gap, and horizontal structure.',
      signal: 'The candlestick supplies the behavioural trigger only after another tool has already made the area important.',
      confirmation: 'The best confluence setups keep respecting the same level after the signal appears.',
      invalidation: 'If price slices through the supposed stack of support or resistance, the confluence thesis was weak.',
      whyNotMemorize: 'Confluence is the opposite of pattern memorisation. It asks why this candle matters here, not everywhere.',
      confusion: {
        pattern: 'More tools vs better confluence',
        reason: 'More tools do not help if they point to different areas. Confluence means agreement on the same location.',
      },
      takeaway: 'A candlestick becomes stronger when another market structure already made its location important.',
    },
    zh: {
      trend: '共振最有价值的时候，是趋势已经把价格送进了一个预先定义好的决策区。',
      location: '这一章本质上讲的是位置证据叠加：趋势线、均线、缺口和水平结构一起指向同一块区域。',
      signal: '只有当别的工具先让这个区域变得重要时，蜡烛图才负责给出行为触发。',
      confirmation: '最好的共振 setup，会在信号出现后继续尊重同一个关键位。',
      invalidation: '如果价格干净利落穿过这组所谓支撑或阻力，共振假设就说明偏弱。',
      whyNotMemorize: '共振本身就是“反背诵”的：它问的是为什么这根 K 线偏偏在这里重要，而不是到处都重要。',
      confusion: {
        pattern: '工具更多 vs 共振更强',
        reason: '如果这些工具指向的根本不是同一块区域，数量再多也不算真正的共振。',
      },
      takeaway: '当别的市场结构先让位置变得重要时，蜡烛图的可信度才会显著提升。',
    },
  },
}
