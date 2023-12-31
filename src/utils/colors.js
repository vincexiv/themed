const colors = {
    custom: [],
    dark: [
      {
        color1: "rgb(30, 6, 54)",
        color2: "rgb(63, 78, 10)",
        color3: "rgb(50, 47, 7)",
        color4: "rgb(74, 21, 27)"
      },
      {
        color1: "rgb(43, 70, 24)",
        color2: "rgb(88, 73, 63)",
        color3: "rgb(116, 23, 75)",
        color4: "rgb(19, 124, 30)"
      },
      {
        color1: "rgb(90, 4, 28)",
        color2: "rgb(10, 104, 109)",
        color3: "rgb(17, 48, 77)",
        color4: "rgb(7, 9, 11)"
      },
      {
        color1: "rgb(91, 8, 25)",
        color2: "rgb(35, 58, 4)",
        color3: "rgb(18, 85, 28)",
        color4: "rgb(51, 83, 49)"
      },
      {
        color1: "rgb(67, 92, 25)",
        color2: "rgb(34, 6, 64)",
        color3: "rgb(74, 123, 80)",
        color4: "rgb(38, 64, 52)"
      },
      {
        color1: "rgb(117, 18, 41)",
        color2: "rgb(41, 73, 68)",
        color3: "rgb(45, 101, 50)",
        color4: "rgb(39, 73, 92)"
      },
      {
        color1: "rgb(28, 102, 89)",
        color2: "rgb(88, 96, 116)",
        color3: "rgb(32, 39, 27)",
        color4: "rgb(5, 7, 12)"
      },
      {
        color1: "rgb(84, 34, 29)",
        color2: "rgb(37, 108, 18)",
        color3: "rgb(123, 10, 119)",
        color4: "rgb(117, 75, 38)"
      },
      {
        color1: "rgb(104, 70, 110)",
        color2: "rgb(90, 62, 94)",
        color3: "rgb(82, 85, 50)",
        color4: "rgb(122, 103, 50)"
      },
      {
        color1: "rgb(97, 97, 94)",
        color2: "rgb(50, 32, 93)",
        color3: "rgb(122, 104, 23)",
        color4: "rgb(119, 96, 103)"
      },
      {
        color1: "rgb(118, 32, 67)",
        color2: "rgb(59, 99, 84)",
        color3: "rgb(109, 118, 74)",
        color4: "rgb(88, 51, 38)"
      },
      {
        color1: "rgb(98, 12, 79)",
        color2: "rgb(38, 7, 1)",
        color3: "rgb(88, 42, 45)",
        color4: "rgb(19, 54, 102)"
      }
    ],
    light: [
      {
        color1: "rgb(140, 128, 146)",
        color2: "rgb(204, 231, 197)",
        color3: "rgb(141, 239, 160)",
        color4: "rgb(199, 245, 172)"
      },
      {
        color1: "rgb(218, 194, 248)",
        color2: "rgb(215, 197, 186)",
        color3: "rgb(133, 170, 136)",
        color4: "rgb(144, 164, 153)"
      },
      {
        color1: "rgb(160, 217, 156)",
        color2: "rgb(227, 248, 148)",
        color3: "rgb(236, 248, 232)",
        color4: "rgb(240, 232, 129)"
      },
      {
        color1: "rgb(144, 176, 137)",
        color2: "rgb(249, 161, 225)",
        color3: "rgb(202, 221, 228)",
        color4: "rgb(237, 131, 176)"
      },
      {
        color1: "rgb(181, 131, 228)",
        color2: "rgb(214, 177, 223)",
        color3: "rgb(206, 181, 184)",
        color4: "rgb(186, 139, 171)"
      },
      {
        color1: "rgb(238, 155, 145)",
        color2: "rgb(164, 138, 242)",
        color3: "rgb(250, 246, 194)",
        color4: "rgb(202, 141, 140)"
      },
      {
        color1: "rgb(185, 205, 154)",
        color2: "rgb(195, 147, 137)",
        color3: "rgb(174, 235, 197)",
        color4: "rgb(199, 138, 237)"
      },
      {
        color1: "rgb(162, 180, 222)",
        color2: "rgb(190, 189, 153)",
        color3: "rgb(200, 196, 229)",
        color4: "rgb(145, 237, 203)"
      },
      {
        color1: "rgb(178, 212, 200)",
        color2: "rgb(135, 220, 207)",
        color3: "rgb(140, 162, 143)",
        color4: "rgb(208, 140, 163)"
      },
      {
        color1: "rgb(148, 212, 143)",
        color2: "rgb(167, 216, 194)",
        color3: "rgb(140, 159, 130)",
        color4: "rgb(213, 195, 205)"
      },
      {
        color1: "rgb(196, 195, 218)",
        color2: "rgb(177, 228, 208)",
        color3: "rgb(185, 190, 140)",
        color4: "rgb(242, 199, 228)"
      },
      {
        color1: "rgb(126, 201, 214)",
        color2: "rgb(239, 142, 244)",
        color3: "rgb(235, 241, 233)",
        color4: "rgb(245, 248, 199)"
      }
    ],
    warm: [
      {
        color1: "rgb(174, 119, 83)",
        color2: "rgb(9, 3, 85)",
        color3: "rgb(227, 51, 64)",
        color4: "rgb(150, 163, 95)"
      },
      {
        color1: "rgb(70, 65, 73)",
        color2: "rgb(215, 114, 90)",
        color3: "rgb(42, 1, 71)",
        color4: "rgb(136, 114, 33)"
      },
      {
        color1: "rgb(128, 90, 78)",
        color2: "rgb(19, 144, 89)",
        color3: "rgb(162, 154, 96)",
        color4: "rgb(34, 129, 8)"
      },
      {
        color1: "rgb(117, 16, 40)",
        color2: "rgb(167, 173, 76)",
        color3: "rgb(207, 134, 40)",
        color4: "rgb(85, 19, 91)"
      },
      {
        color1: "rgb(173, 103, 17)",
        color2: "rgb(129, 42, 66)",
        color3: "rgb(33, 79, 10)",
        color4: "rgb(105, 28, 61)"
      },
      {
        color1: "rgb(215, 177, 101)",
        color2: "rgb(232, 32, 80)",
        color3: "rgb(179, 37, 96)",
        color4: "rgb(212, 67, 68)"
      },
      {
        color1: "rgb(253, 97, 77)",
        color2: "rgb(100, 29, 84)",
        color3: "rgb(27, 102, 81)",
        color4: "rgb(96, 103, 76)"
      },
      {
        color1: "rgb(175, 130, 62)",
        color2: "rgb(135, 118, 58)",
        color3: "rgb(254, 47, 2)",
        color4: "rgb(115, 120, 47)"
      },
      {
        color1: "rgb(184, 149, 57)",
        color2: "rgb(107, 168, 6)",
        color3: "rgb(196, 34, 53)",
        color4: "rgb(232, 107, 83)"
      },
      {
        color1: "rgb(71, 53, 71)",
        color2: "rgb(33, 23, 12)",
        color3: "rgb(45, 154, 24)",
        color4: "rgb(197, 113, 96)"
      },
      {
        color1: "rgb(223, 30, 43)",
        color2: "rgb(112, 39, 55)",
        color3: "rgb(168, 22, 73)",
        color4: "rgb(3, 12, 28)"
      },
      {
        color1: "rgb(203, 63, 38)",
        color2: "rgb(251, 159, 10)",
        color3: "rgb(233, 27, 43)",
        color4: "rgb(207, 59, 32)"
      }
    ],
    cold: [
      {
        color1: "rgb(13, 97, 35)",
        color2: "rgb(87, 30, 109)",
        color3: "rgb(6, 119, 95)",
        color4: "rgb(14, 51, 53)"
      },
      {
        color1: "rgb(6, 46, 68)",
        color2: "rgb(18, 43, 150)",
        color3: "rgb(48, 178, 222)",
        color4: "rgb(11, 96, 243)"
      },
      {
        color1: "rgb(36, 134, 197)",
        color2: "rgb(87, 10, 63)",
        color3: "rgb(13, 154, 43)",
        color4: "rgb(7, 162, 53)"
      },
      {
        color1: "rgb(32, 126, 39)",
        color2: "rgb(27, 9, 1)",
        color3: "rgb(66, 62, 47)",
        color4: "rgb(46, 111, 121)"
      },
      {
        color1: "rgb(59, 31, 207)",
        color2: "rgb(50, 92, 165)",
        color3: "rgb(18, 144, 244)",
        color4: "rgb(79, 95, 25)"
      },
      {
        color1: "rgb(73, 32, 237)",
        color2: "rgb(46, 18, 199)",
        color3: "rgb(52, 31, 172)",
        color4: "rgb(5, 118, 55)"
      },
      {
        color1: "rgb(76, 162, 33)",
        color2: "rgb(99, 12, 173)",
        color3: "rgb(88, 30, 79)",
        color4: "rgb(44, 15, 241)"
      },
      {
        color1: "rgb(96, 15, 58)",
        color2: "rgb(69, 6, 17)",
        color3: "rgb(2, 80, 63)",
        color4: "rgb(14, 154, 173)"
      },
      {
        color1: "rgb(49, 86, 230)",
        color2: "rgb(89, 173, 214)",
        color3: "rgb(31, 81, 180)",
        color4: "rgb(57, 109, 91)"
      },
      {
        color1: "rgb(73, 144, 243)",
        color2: "rgb(86, 66, 189)",
        color3: "rgb(39, 158, 99)",
        color4: "rgb(17, 107, 64)"
      },
      {
        color1: "rgb(70, 60, 234)",
        color2: "rgb(52, 16, 162)",
        color3: "rgb(75, 158, 233)",
        color4: "rgb(16, 40, 151)"
      },
      {
        color1: "rgb(24, 165, 239)",
        color2: "rgb(70, 66, 115)",
        color3: "rgb(11, 4, 124)",
        color4: "rgb(72, 151, 29)"
      }
    ]
  }

export default colors