$(document).ready(function () {
  $('#index_tt').change(function () {
    e = $(this);
    val = e.val();
    text = $('#select2-index_tt-container').html();
    $('#adv_dd').val(val);
    $('#select2-adv_dd-container').html(text);
    $.ajax({
      type: "POST",
      url: "../ajax/get_quanhuyen.php",
      data: {
        id: val
      }, success: function (data) {
        $('#adv_qh').html(data);
      }
    });
  });
  $('#adv_dd').change(function () {
    e = $(this);
    val = e.val();
    text = $('#select2-adv_dd-container').html();
    $('#index_tt').val(val);
    $('#select2-index_tt-container').html(text);
    $.ajax({
      type: "POST",
      url: "../ajax/get_quanhuyen.php",
      data: {
        id: val
      }, success: function (data) {
        $('#adv_qh').html(data);
      }
    });
  });
  /*
  Tìm kiếm trên P/c
  */
  $('#btn_search').click(function () {
    e = $(this);
    var diadiem = $("#index_tt").val();
    var citname = $("#select2-index_tt-container").attr('title');

    var hinhthuc = $('#adv_ht').val();
    var hocvan = $('#adv_trinhdo').val();
    var gioitinh = $('#adv_gt').val();
    var mucluong = $('#adv_ml').val();
    var capbac = $('#adv_cb').val();
    var kinhnghiem = $('#adv_kn').val();
    var capnhat = $('#adv_capnhat').val();
    var quanhuyen = $('#adv_qh').val();

    if (e.hasClass('btn_search_uv')) {
      var keyword = $('#keyword_candi').val();
      var idcate = $('#index_nn').val();
      var nganhnghe = $('#select2-index_nn-container').text();
      search_advancedUV(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    }
    else {
      var keyword = $("#keyword_job").val().toLowerCase();
      if (Object.values(obj_cate).indexOf(keyword) > -1) {
        var nganhnghe = keyword;
        keyword = '';
        var idcate = getKeyByValue(obj_cate, nganhnghe);
      } else {
        var nganhnghe = '';
        var idcate = 0;
      }
      search_advanced(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    }

  });
  $('#filter').click(function () {
    result = $(document).find('#searchjob_pc').length;
    var diadiem = $("#index_tt").val();
    var citname = $("#select2-index_tt-container").text();
    var idcate = $('#index_nn').val();
    var nganhnghe = $('#select2-index_nn-container').text();
    var hinhthuc = $('#adv_ht').val();
    var hocvan = $('#adv_trinhdo').val();
    var gioitinh = $('#adv_gt').val();
    var mucluong = $('#adv_ml').val();
    var capbac = $('#adv_cb').val();
    var kinhnghiem = $('#adv_kn').val();
    var capnhat = $('#adv_capnhat').val();
    var quanhuyen = $('#adv_qh').val();
    if (result > 0) {
      var keyword = $("#keyword_job").val();
      search_advanced(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    } else {
      var keyword = $("#keyword_candi").val();
      search_advancedUV(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    }
  });
  /* End */
  /* Tìm kiếm trên mobile */
  $('#index_city').change(function () {
    val = $(this).val();
    $('#adv_city').val(val);
    $('#select2-adv_city-container').html($('#select2-index_city-container').html());

    $.ajax({
      type: "POST",
      url: "../ajax/get_quanhuyen.php",
      data: {
        id: val
      }, success: function (data) {
        $('#adv_district').html(data);
      }
    });
  });
  $('#adv_city').change(function () {
    val = $(this).val();
    $('#index_city').val(val);
    $('#select2-index_city-container').html($('#select2-adv_city-container').html());

    $.ajax({
      type: "POST",
      url: "../ajax/get_quanhuyen.php",
      data: {
        id: val
      }, success: function (data) {
        $('#adv_district').html(data);
      }
    });
  });
  $('#search_mobile .search_home#btn_submit,#adv_submit').click(function () {
    var keyword = $(".search_item #keyword").val().toLowerCase();
    var diadiem = $("#index_city").val();
    var citname = $("#select2-index_city-container").text();
    var idcate = $('#index_cate').val();
    var nganhnghe = $('#select2-index_cate-container').text();
    var hinhthuc = $('#adv_form_of_word').val();
    var hocvan = $('#adv_level').val();
    var gioitinh = $('#adv_gender').val();
    var mucluong = $('#adv_money').val();
    var capbac = $('#adv_rank').val();
    var kinhnghiem = $('#adv_exp').val();
    var capnhat = $('#adv_update').val();
    var quanhuyen = $('#adv_district').val();
    if ($('#search_mobile').hasClass('isListCandi')) {
      search_advancedUV(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    } else {
      keyword = keyword.toLowerCase();
      if (Object.values(obj_cate).indexOf(keyword) > -1) {
        var nganhnghe = keyword;
        keyword = '';
        var idcate = getKeyByValue(obj_cate, nganhnghe);
      } else {
        var nganhnghe = '';
        var idcate = 0;
      }
      search_advanced(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
    }
  });
  $('#box_search_key .tag_s_item').click(function () {
    $('#keyword_job').val($(this).text());
    $('#box_search_key').hide();
    $('.box_city').show();
    $('#index_tt').select2("open");
  });
});
var defaultDiacriticsRemovalMap = [{
  'base': 'A',
  'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'
}, {
  'base': 'AA',
  'letters': '\uA732'
}, {
  'base': 'AE',
  'letters': '\u00C6\u01FC\u01E2'
}, {
  'base': 'AO',
  'letters': '\uA734'
}, {
  'base': 'AU',
  'letters': '\uA736'
}, {
  'base': 'AV',
  'letters': '\uA738\uA73A'
}, {
  'base': 'AY',
  'letters': '\uA73C'
}, {
  'base': 'B',
  'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'
}, {
  'base': 'C',
  'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'
}, {
  'base': 'D',
  'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'
}, {
  'base': 'DZ',
  'letters': '\u01F1\u01C4'
}, {
  'base': 'Dz',
  'letters': '\u01F2\u01C5'
}, {
  'base': 'E',
  'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'
}, {
  'base': 'F',
  'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'
}, {
  'base': 'G',
  'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'
}, {
  'base': 'H',
  'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'
}, {
  'base': 'I',
  'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'
}, {
  'base': 'J',
  'letters': '\u004A\u24BF\uFF2A\u0134\u0248'
}, {
  'base': 'K',
  'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'
}, {
  'base': 'L',
  'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'
}, {
  'base': 'LJ',
  'letters': '\u01C7'
}, {
  'base': 'Lj',
  'letters': '\u01C8'
}, {
  'base': 'M',
  'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'
}, {
  'base': 'N',
  'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'
}, {
  'base': 'NJ',
  'letters': '\u01CA'
}, {
  'base': 'Nj',
  'letters': '\u01CB'
}, {
  'base': 'O',
  'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'
}, {
  'base': 'OI',
  'letters': '\u01A2'
}, {
  'base': 'OO',
  'letters': '\uA74E'
}, {
  'base': 'OU',
  'letters': '\u0222'
}, {
  'base': 'OE',
  'letters': '\u008C\u0152'
}, {
  'base': 'oe',
  'letters': '\u009C\u0153'
}, {
  'base': 'P',
  'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'
}, {
  'base': 'Q',
  'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A'
}, {
  'base': 'R',
  'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'
}, {
  'base': 'S',
  'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'
}, {
  'base': 'T',
  'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'
}, {
  'base': 'TZ',
  'letters': '\uA728'
}, {
  'base': 'U',
  'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'
}, {
  'base': 'V',
  'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'
}, {
  'base': 'VY',
  'letters': '\uA760'
}, {
  'base': 'W',
  'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'
}, {
  'base': 'X',
  'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C'
}, {
  'base': 'Y',
  'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'
}, {
  'base': 'Z',
  'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'
}, {
  'base': 'a',
  'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'
}, {
  'base': 'aa',
  'letters': '\uA733'
}, {
  'base': 'ae',
  'letters': '\u00E6\u01FD\u01E3'
}, {
  'base': 'ao',
  'letters': '\uA735'
}, {
  'base': 'au',
  'letters': '\uA737'
}, {
  'base': 'av',
  'letters': '\uA739\uA73B'
}, {
  'base': 'ay',
  'letters': '\uA73D'
}, {
  'base': 'b',
  'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'
}, {
  'base': 'c',
  'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'
}, {
  'base': 'd',
  'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'
}, {
  'base': 'dz',
  'letters': '\u01F3\u01C6'
}, {
  'base': 'e',
  'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'
}, {
  'base': 'f',
  'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'
}, {
  'base': 'g',
  'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'
}, {
  'base': 'h',
  'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'
}, {
  'base': 'hv',
  'letters': '\u0195'
}, {
  'base': 'i',
  'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'
}, {
  'base': 'j',
  'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249'
}, {
  'base': 'k',
  'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'
}, {
  'base': 'l',
  'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'
}, {
  'base': 'lj',
  'letters': '\u01C9'
}, {
  'base': 'm',
  'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'
}, {
  'base': 'n',
  'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'
}, {
  'base': 'nj',
  'letters': '\u01CC'
}, {
  'base': 'o',
  'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'
}, {
  'base': 'oi',
  'letters': '\u01A3'
}, {
  'base': 'ou',
  'letters': '\u0223'
}, {
  'base': 'oo',
  'letters': '\uA74F'
}, {
  'base': 'p',
  'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'
}, {
  'base': 'q',
  'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759'
}, {
  'base': 'r',
  'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'
}, {
  'base': 's',
  'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'
}, {
  'base': 't',
  'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'
}, {
  'base': 'tz',
  'letters': '\uA729'
}, {
  'base': 'u',
  'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'
}, {
  'base': 'v',
  'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'
}, {
  'base': 'vy',
  'letters': '\uA761'
}, {
  'base': 'w',
  'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'
}, {
  'base': 'x',
  'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D'
}, {
  'base': 'y',
  'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'
}, {
  'base': 'z',
  'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'
}];
var diacriticsMap = {};
for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
  var letters = defaultDiacriticsRemovalMap[i].letters;
  for (var j = 0; j < letters.length; j++) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalMap[i].base;
  }
}
//Tìm kiếm ứng viên
function search_advancedUV(keyword = '', diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen) {
  var sql = '';

  key = removeSpecial(keyword);
  key = key.replace(/\s/g, "+");

  sql += '?keyword=' + key;
  if (idcate != 0) {
    sql += '&nganhnghe=' + idcate;
  }
  if (diadiem != 0) {
    sql += '&diadiem=' + diadiem;
  }
  if (hinhthuc != 0) {
    sql += '&ht=' + hinhthuc;
  }
  if (hocvan != 0) {
    sql += '&hv=' + hocvan;
  }
  if (gioitinh != 0) {
    sql += '&gt=' + gioitinh;
  }
  if (mucluong != 0) {
    sql += '&ml=' + mucluong;
  }
  if (capbac != 0) {
    sql += '&cb=' + capbac;
  }
  if (kinhnghiem != "") {
    sql += '&kn=' + kinhnghiem;
  }
  if (capnhat != 0) {
    sql += '&capnhat=' + capnhat;
  }
  if (quanhuyen != 0) {
    sql += '&qh=' + quanhuyen;
  }
  url = '/tim-ung-vien' + sql;

  // Candi search by category
  if (keyword == '' && idcate != 0 && diadiem == 0 && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    url = '/ung-vien-' + remove_accent(nganhnghe) + '-l' + idcate;
  } // End search category

  // Candi search by provice
  if (idcate == 0 && diadiem != 0 && keyword == '' && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    url = '/ung-vien-tai-' + remove_accent(citname) + '-c' + diadiem;

  } // End search by province

  //Candi search by category and province    
  if (keyword == '' && idcate != 0 && diadiem != 0 && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    url = '/ung-vien-' + remove_accent(nganhnghe) + '-tai-' + remove_accent(citname) + '-c' + diadiem + 'l' + idcate;
  } // End search by category and province
  window.location.href = url;
}
function open_box(elm) {
  document.getElementById(elm).style.display = "block";
  document.getElementsByClassName('box_city')[0].style.display = "none";
}
function close_box(elm) {
  document.getElementById(elm).style.display = "none";
}
function autocomplete(inp, arr, append) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    document.getElementById(append).appendChild(a);
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr[i].length; j++) {
        if (arr[i].substr(j, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.setAttribute("class", "tag_s_item");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
            document.getElementById('box_search_key').style.display = "none";
            $('#index_tt').select2("open");
          });
          a.appendChild(b);
          break;
        }
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");

    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      $('#btn_search').click();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
    inp.value = x[currentFocus].textContent;
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

width = $(window).width();
if (width > 1024) {
  autocomplete(document.getElementById("keyword_job"), array_search, 'result_search');
} else {
  autocomplete(document.getElementById("keyword"), array_search, 'result_search_mb');
}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007E]/g, function (a) {
    return diacriticsMap[a] || a;
  });
}

function removeSpecial(string) {
  return string.replace(/[`~!@#$%^&*()_|+\=?;:'"<>\{\}\[\]\\\/]/gi, '');
}

function remove_accent(url) {
  url = url.toLowerCase();
  url = removeDiacritics(url);
  url = url.replace('viec lam', '', url);
  url = url.replace(',', ' ', url);
  url = url.trim();
  url = url.replace(/-/g, " ");
  url = url.replace('/', " ");
  url = url.replace(/\s\s\s/g, " ");
  url = url.replace(/\s\s/g, " ");
  url = url.replace(/\s/g, "-");

  return url;
}

function search_advanced(keyword = '', diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen) {

  var sql = '';
  arr_ck = ['79', '44', '83', '87'];
  if (arr_ck.indexOf(idcate) != -1) {
    arr_l = ['Tìm', 'tìm', 'tim', 'Việc', 'việc', 'làm', 'Làm', 'viec', 'làm', 'lam'];
    arr_r = ['', '', '', '', '', '', '', '', '', ''];
    nganhnghe.replace(arr_l, arr_r);
  }

  key = removeSpecial(keyword);
  key = key.replace(/\s/g, "+");

  sql += '?keyword=' + key;
  if (idcate != 0) {
    sql += '&nganhnghe=' + idcate;
  }
  if (diadiem != 0) {
    sql += '&diadiem=' + diadiem;
  }
  if (hinhthuc != 0) {
    sql += '&ht=' + hinhthuc;
  }
  if (hocvan != 0) {
    sql += '&hv=' + hocvan;
  }
  if (gioitinh != 0) {
    sql += '&gt=' + gioitinh;
  }
  if (mucluong != 0) {
    sql += '&ml=' + mucluong;
  }
  if (capbac != 0) {
    sql += '&cb=' + capbac;
  }
  if (kinhnghiem != 0) {
    sql += '&kn=' + kinhnghiem;
  }
  if (capnhat != 0) {
    sql += '&capnhat=' + capnhat;
  }
  if (quanhuyen != 0) {
    sql += '&qh=' + quanhuyen;
  }

  url = '/tim-kiem' + sql;
  // Job search by category
  if (keyword == '' && idcate != 0 && diadiem == 0 && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    if (idcate == 87) {
      url = '/tim-viec-lam-them.html';
    } else {
      url = '/viec-lam-' + remove_accent(nganhnghe) + '-l' + idcate + '.html';
    }
  } // End search category

  // Job search by provice
  else if (idcate == 0 && diadiem != 0 && keyword == '' && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    url = '/viec-lam-tai-' + remove_accent(citname) + '-c' + diadiem + '.html';
  } // End search by province

  //Job search by category and province    
  else if (keyword == '' && idcate != 0 && diadiem != 0 && hinhthuc == 0 && hocvan == 0 && gioitinh == 0 && mucluong == 0 && capbac == 0 && kinhnghiem == 0 && quanhuyen == 0) {
    ar = ['1', '45', '48', '26', '2'];
    var IndexOf = ar.indexOf(diadiem);
    if ((idcate < 71 && idcate != 87) || IndexOf != -1) {
      url = '/viec-lam-' + remove_accent(nganhnghe) + '-tai-' + remove_accent(citname) + '-c' + diadiem + 'l' + idcate + '.html';
    }
    if (idcate == 87) {
      url = '/tim-viec-lam-them-tai-' + remove_accent(citname) + '-c' + diadiem + 'l87.html';
    }
  } // End search by category and province
  else {
    if (Object.values(obj_tag).indexOf(keyword) > -1) {
      var keyTagId = getKeyByValue(obj_tag, keyword);
    } else {
      var keyTagId = 0;
    }

    $.ajax({
      type: "POST",
      url: "../ajax/getUrlSearch.php",
      dataType: 'json',
      async: false,
      data: {
        idCate: idcate,
        citId: diadiem,
        districtId: quanhuyen,
        keyTagId: keyTagId
      }, success: function (obj) {
        1 == obj.result && (url = obj.url);
      }
    });
  }
  window.location.href = url;
}
function search_district(c_id, d_id, elm_id, adv_id) {
  $('#' + elm_id).val(c_id).select2({ width: '35%' });
  var keyword = $("#keyword_job").val().toLowerCase();
  if (Object.values(obj_cate).indexOf(keyword) > -1) {
    var nganhnghe = keyword;
    keyword = '';
    var idcate = getKeyByValue(obj_cate, nganhnghe);
  } else {
    var nganhnghe = '';
    var idcate = 0;
  }
  var diadiem = c_id;
  var citname = $("#select2-index_tt-container").attr('title');

  var hinhthuc = $('#adv_ht').val();
  var hocvan = $('#adv_trinhdo').val();
  var gioitinh = $('#adv_gt').val();
  var mucluong = $('#adv_ml').val();
  var capbac = $('#adv_cb').val();
  var kinhnghiem = $('#adv_kn').val();
  var capnhat = $('#adv_capnhat').val();
  var quanhuyen = d_id;
  search_advanced(keyword, diadiem, citname, idcate, nganhnghe, hinhthuc, hocvan, gioitinh, mucluong, capbac, kinhnghiem, capnhat, quanhuyen);
}