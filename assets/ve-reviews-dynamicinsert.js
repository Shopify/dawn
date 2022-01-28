setTimeout(function() { dynamicinsert_init(); }, 1);

function dynamicinsert_init() {
  fetch('/products/' + DYNAMICINSERT_PRODUCT_HANDLE + '.json').then(data => data.json()).then(response => {
    var product = response.product;
    document.getElementById('load_reviews_dynamically_here').appendChild(document.getElementById('div_reviews_wrapper'));
    document.querySelectorAll('.ve-product-top-reviews')[0].setAttribute('data-product-id', product.id);
    document.querySelectorAll('.ve-product-top-reviews')[0].setAttribute('data-url', 'https://www.vitalityextracts.com/products/' + product.handle);
    document.querySelectorAll('.ve-product-top-reviews')[0].setAttribute('id', 'main-product-reviews-' + product.id);
    document.querySelectorAll('.ve-ptr-write-review-btn')[0].setAttribute('data-product-id', product.id);
    document.querySelectorAll('.ve-ptr-ask-a-question-btn')[0].setAttribute('data-product-id', product.id);
    document.querySelectorAll('.ve-write-review-input.ve-review-title-input')[0].setAttribute('placeholder', 'Title ex. I love ' + product.title + '...');
    document.querySelectorAll('.ve-write-review-input.ve-review-post-input')[0].setAttribute('placeholder', 'Write your experience with the ' + product.title + ' here...');
    document.querySelectorAll('.ve-aqua-btn.ve-review-post-btn')[0].setAttribute('data-product-url', '/products/' + product.handle);
    document.querySelectorAll('.ve-aqua-btn.ve-review-post-btn')[0].setAttribute('data-sku', product.id);
    document.querySelectorAll('.ve-aqua-btn.ve-review-post-btn')[0].setAttribute('data-product-title', product.title);
    document.querySelectorAll('.ve-aqua-btn.ve-review-post-btn')[0].setAttribute('data-product-image-url', product.image.src);
    document.querySelectorAll('.js_ask-question-form')[0].setAttribute('data-product-id', product.id);
    document.querySelectorAll('.js_ask-question-form')[0].setAttribute('data-product-url', '/products/' + product.handle);
    document.querySelectorAll('.js_ask-question-form')[0].setAttribute('data-product-title', product.title);
    document.querySelectorAll('.js_ask-question-form')[0].setAttribute('data-product-image-url', product.image.src);
    document.querySelectorAll('.js_reviews-no-questions-text.ve-reviews-questions-none')[0].innerHTML = 'Have a question about ' + product.title + '? Be the first to ask.';

    document.getElementById('div_reviews_wrapper').style.display = '';

    dynamicinsert_getReviews(product.id, 'sentiment', 'desc', 1, 1).then(function(data){
      var response = data.response;
      var total_reviews = response.bottomline.total_review;
      var review_avg = response.bottomline.average_score;
      var reviews_per_page = response.pagination.per_page;

      var reviewsPagination = new ve_Pagination('.js_reviews-pagination', {
        total_items: total_reviews,
        items_per_page: reviews_per_page,
        open_page: function (page) {
          document.querySelectorAll('.js_reviews')[0].style.display = 'none';
          document.querySelectorAll('.ve-product-top-reviews .ve-loading')[0].style.display = 'block';

          //getProductReviews('products/' + productId + '/reviews.json?sort=rating&direction=desc&page=' + page)
          dynamicinsert_getReviews(product.id, 'sentiment', 'desc', 1, page)
            .then(function (res) {
              dynamicinsert_openPageInitReviews(product.id, res);
            })
            .catch(function (e) {
              //if error with vitality api, call data from yotpo
              /*console.log('Error when trying to get reviews from vitality API - in pagination');
              getProductReviews('products/' + productId + '/reviews.json?sort=rating&direction=desc&page=' + page)
                .then(function (res) {
                  openPageInitReviews(productId, res);
                })
                .catch(function(e){
                  alert('Error: fetching product reviews. Please try again later');
                });*/
            });
        },
      });

      dynamicinsert_openPageInitReviews(product.id, data);
    });
  });
}

function dynamicinsert_getReviews(productId, sortOrder, sortDirection, minStars, page) {
  return fetch(APISERVER_RESTAPI_BASEURL + 'products/reviews/' + productId + '/' + sortOrder + '/' + sortDirection + '/' + minStars + '/' + page)
    .then(data => data.json());
}

function dynamicinsert_openPageInitReviews(productId, res){
  dynamicinsert_buildReviewsHtml(productId, res.response);
  document.querySelectorAll('.ve-product-top-reviews .ve-loading')[0].style.display = 'none'; //hide loader abd show page
  document.querySelectorAll('.js_reviews')[0].style.display = '';
  dynamicinsert_scrollToTarget('#reviews-section-top');
}

function dynamicinsert_buildReviewsHtml(productId, response) {
  var other_upvotes = localStorage.getItem('ve-review-votes');
  if (other_upvotes) {
    var votes_array = JSON.parse(other_upvotes);
  }

  document.querySelectorAll('.ve-ptr-reviews-section')[0].innerHTML = '';

  response.reviews.forEach(function (item, index) {
    var voted_class = "";
    if (other_upvotes) {
      voted_class = votes_array.includes(item.id + '') ? 'voted-clicked' : 'not-true';
    }
    try {
      if (votes_array.includes(item.id + '')) {
        item.votes_up++;
      }
    } catch (ob) {}

    var score_percent = (item.score / 5) * 100;
    var username = item.user.display_name.toLowerCase();
    var first_letter = username.charAt(0);
    var post_html = '';
    var title_html = '';

    var post = dynamicinsert_applySentenceCase(item.content);
    var truncated_post = dynamicinsert_truncateText(post, 199, true);

    var title = dynamicinsert_applySentenceCase(item.title);
    var truncated_title = dynamicinsert_truncateText(title, 50, true);

    //build FACEBOOK  share links
    // var share_productImageUrl = response.products[0].image_url != false ? response.products[0].image_url : "";

    var fb_link =
      'https://www.facebook.com/dialog/feed?app_id=226132034107547&aria_labelled_by=facebook-review-' +
      item.id +
      '&display=popup&link=';
    var fb_link_encode_part = 'http://reviews.me/facebook_post?image_url=';
    fb_link_encode_part += '&productUrl=' + response.products[0].social_links.facebook;
    fb_link_encode_part += '&review=' + post;
    fb_link_encode_part += '&social_title=' + title;
    fb_link_encode_part += '&redirect_uri=http://my.yotpo.com/shares?review_id=' + item.id;

    var fb_encode_part_url = encodeURIComponent(fb_link_encode_part);
    fb_link = fb_link + encodeURIComponent(fb_link_encode_part);

    //end facebook share link

    var imageHtml = '';

    if (item.images_data) {
      item.images_data.forEach(function (image, i) {
        imageHtml +=
          '<img src="' +
          image.thumb_url +
          '" class="lazyload ve-review-img-thumbnail" data-review-id="' +
          item.id +
          '" data-image-id="' +
          image.id +
          '" data-original-src="' +
          image.original_url +
          '" onclick="dynamicinsert_openReviewImage(this)">';
      });
    }

    //title truncated control flow
    if (title.length <= 50) {
      title_html = '<div class="ve-review-title">' + title + '</div>';
    } else {
      title_html = '<div class="ve-review-title truncated">' + truncated_title + '</div>';
    }

    //post truncated control flow
    if (post.length <= 200) {
      post_html = '<div class="ve-review-post-text">';
      post_html += '<div class="ve-post">' + post + '</div>';
      post_html += '</div>';
    } else {
      post_html = '<div class="ve-review-post-text">';
      post_html += '<div class="ve-truncated-post" data-post-id="' + item.id + '">' + truncated_post + '';
      post_html +=
        '<div class="ve-readmore" data-post-id="' +
        item.id +
        '" onclick="dynamicinsert_reviewShowMore(this, true)"> Read More <i class="la la-angle-down"></i></div>';
      post_html += ' </div>';
      post_html += '<div class="ve-full-post" data-post-id="' + item.id + '" style="display:none;">' + post + '';
      post_html +=
        '<div class="ve-readless" data-post-id="' +
        item.id +
        '" onclick="dynamicinsert_reviewShowMore(this, false)"> Read Less <i class="la la-angle-up"></i></div>';
      post_html += '</div>';
      post_html += '</div>';
    }

    if (score_percent >= 65 && score_percent <= 98) {
      score_percent += 2;
    }
    var createdDate = new Date(item.created_at);
    var spl = createdDate.toDateString().split(' ');
    var createdDateDisplay = spl[0] + ' ' + spl[1] + ' ' + spl[2];
    var html = '<div class="ve-col-2 ve-col-mobtab-1 ve-review--wrap" data-review-id="' + item.id + '">';
    html += '<div class="ve-review-heading">';
    // html +=  '<div class="ve-review-profile--wrap">';
    // html +=   '<div class="ve-profile-letter">'+first_letter+'</div>';
    // html +=  '</div>';
    html += '<div class="ve-review-profile-full-circle">';
    html += '<div class="ve-profile-letter c-white">' + first_letter + '</div>';
    html += '<div class="ve-review-profile--blue-circle">';
    html += '<i class="la la-check ve-prof-check"></i>';
    html += '</div>';
    html += '</div>';
    html += '<div class="ve-review-rating-username--wrap">';
    html += '<div class="ve-ratings">';
    html += '<div class="ve-empty-stars"></div>';
    html += '<div class="ve-full-stars" style="width: ' + score_percent + '%;"></div>';
    html += '</div>';
    html += '<div class="ve-review-username--wrap">';
    html += '<div class="ve-review-username">' + username + '</div>';
    html += '<div class="ve-review-verified-buyer">Verified Buyer</div>';
    html += '<div class="" style="margin-left:5px; -webkit-text-stroke: 0px; color: #777; font-size:14px;font-family: poynter-oldstyle-display,serif;">' + createdDateDisplay + '</div>';

    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="ve-review-title--wrap">';
    html += title_html;
    html += '</div>';
    html += '<div class="ve-review-post--wrap">';
    html += post_html;
    html += '</div>';
    //if image data exists for the review
    if (item.images_data) {
      html += '<div class="ve-review-imgs--wrap">';
      html += imageHtml;
      html += '</div>';
    }
    //end if image data exists
    html += '<div class="ve-review-helpful--wrap">';
    html +=
      '<img class="ve-helpful-img" src="https://ve-shopify-store.s3-us-west-1.amazonaws.com/assets/images/jpg/review-social-4-img.jpg"/> <span class="ve-review-helpful-text">Was this helpful ?</span>';
    html += '<div class="ve-review-vote-updown">';
    html +=
      '<i class="la la-thumbs-up vote-up ' +
      voted_class +
      '" data-vote-type="up" data-review-id="' +
      item.id +
      '" data-current-votes="' +
      item.votes_up +
      '"></i>';
    html +=
      '<img class="ve-review-vote-loader" src="https://ve-shopify-store.s3.us-west-1.amazonaws.com/assets/images/svg/loaders/loader-oval.svg" data-review-id="' +
      item.id +
      '" style="width: 18px; position: relative; top: 4px;"/>';
    html += '<span class="ve-helpful-vote-up-num" data-review-id="' + item.id + '">' + item.votes_up + ' </span>';
    // html +=     '<i class="la la-thumbs-down vote-down" data-vote-type="down" data-review-id="' + item.id + '"></i>';
    html += '</div>';
    html += '<div class="ve-share--wrap"><span class="ve-vertical-review-link">&nbsp;|&nbsp;</span>';
    html +=
      '<a href="' +
      fb_link +
      '" target="popup" onclick="window.open(\'' +
      fb_link +
      "','name','width=600,height=500'); ve_sendGATrackerEvent('ClickedAnchor', 'yotporeviewsharefb'); ve_sendGATrackerEvent('ClickedReview', '" + item.id + "', 'shared_facebook'); ve_sendFBTrackerEvent('YotPoReviewShareFacebook', { review_id: " + item.id + " });\">Share <i class=\"la la-facebook-square\"></i>";
    html += '</a>';
    html += '</div>';
    html += '</div>';
    html += '<div class="ve-review-img-modal" data-review-id="' + item.id + '" style="display: none;">';
    html +=
      '<div class="ve-review-modal-close--wrap" onclick="dynamicinsert_closeReviewImage(this)" data-review-id="' +
      item.id +
      '"><i class="la la-times ve-review-modal-close"></i></div>';
    html += '<div class="ve-review-orignal-img--wrap" data-review-id="' + item.id + '"></div>';
    html += '</div>';
    html += '<div class="ve-review-modal-overlay" style="display: none;"></div>';
    html += '</div>';

    if (index == 0) {
      document.querySelectorAll('.ve-loading')[0].style.display = 'none'; //remove loading spinner
    }

    document.querySelectorAll('.ve-ptr-reviews-section')[0].innerHTML += html;

    /*
    $('.ve-review-vote-updown i')
      .unbind()
      .click(function () {
        var id = $(this).attr('data-review-id');
        $('span.ve-helpful-vote-up-num[data-review-id="' + id + '"]').hide();
        $('.ve-review-vote-loader[data-review-id="' + id + '"]').show();

        var vote_type = $(this).attr('data-vote-type');
        var current_vote_num = $(this).attr('data-current-votes');
        current_vote_num = parseInt(current_vote_num);

        //console.log('vote_type', vote_type);
        $('.ve-review-vote-updown i[data-review-id="' + id + '"]').unbind();

        if (other_upvotes && votes_array.includes(id)) {
          return; //user has upvoted review before so return from function
        }

        voteReview(id, vote_type).then(function (data) {
          if (data.success) {
            $('.ve-review-vote-loader[data-review-id="' + id + '"]').hide();
            $('.ve-helpful-vote-up-num[data-review-id="' + id + '"]').show();

            if (other_upvotes) {
              if (votes_array.length >= 50) {
                votes_array.pop();
              }

              votes_array.push(id);
              localStorage.setItem('ve-review-votes', JSON.stringify(votes_array));
            } else {
              localStorage.setItem('ve-review-votes', '["' + id + '"]');
            }
            $('.ve-helpful-vote-up-num[data-review-id="' + id + '"]').text(current_vote_num + 1);
            $('.ve-review-vote-updown i[data-review-id="' + id + '"][data-vote-type="' + vote_type + '"]').addClass(
              'voted-clicked'
            );
            $(
              '.ve-review-vote-updown i[data-review-id="' +
              id +
              '"][data-vote-type="' +
              (vote_type == 'up' ? 'down' : 'up') +
              '"]'
            ).addClass('voted-not-clicked');

            ve_sendGATrackerEvent('ClickedAnchor', 'yotporeviewvote_' + vote_type);
            ve_sendGATrackerEvent('ClickedReview', id, 'voted_' + vote_type);
            ve_sendFBTrackerEvent('YotPoReviewVoted' + vote_type.charAt(0).toUpperCase() + vote_type.slice(1), {
              review_id: id
            });
          }
        });
      });
      */
  });
}

function dynamicinsert_scrollToTarget(target, speed, extraOffset) {
  /*speed = speed ? speed : 900;
  extraOffset = extraOffset ? extraOffset : 100;
  $([document.documentElement, document.body]).animate({
      scrollTop: $(target).offset().top - extraOffset,
    },
    speed
  );*/
}

function dynamicinsert_applySentenceCase(str) {
  return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase().replace(/\si\s/g, ' I ');
  });
}

function dynamicinsert_truncateText(text, max_word, cut_word) {
  var temp_text = text.substring(0, max_word);
  if (cut_word != undefined && cut_word == true) {
    temp_text = temp_text.substr(0, Math.min(temp_text.length, temp_text.lastIndexOf(' ')));
  }
  temp_text += '...';

  return temp_text;
}

//===========================
//Pagination class
//===========================
function ve_Pagination(target, data) {
  var that = this;
  this.target = target;
  this.totalPages = Math.ceil(data.total_items / data.items_per_page);

  //optional params to be passed in
  this.openPage = data.open_page ? data.open_page : null;
  this.container = data.container ? data.container : null;

  //===============================================================
  //Name: goToPage - parmater excepts targetPage number
  //===============================================================

  this.goToPage = function (targetPage) {
    that.openPage(targetPage);
    that.buildPagination(targetPage);
  };

  //==================================================================
  //Name: buildPagination - parmater: current page - number or string
  //==================================================================

  this.buildPagination = function (currentPage) {
    currentPage = parseInt(currentPage);
    var pagesHtml = '';
    var html = '';
    var startNum, endNum;
    var prevClass = currentPage === 1 ? 'disabled' : '';
    var nextClass = currentPage === that.totalPages ? 'disabled' : '';

    if (currentPage <= 3) {
      startNum = 1;
      endNum = that.totalPages <= 5 ? that.totalPages : 5;
    } else {
      startNum = currentPage - 2;
      endNum = currentPage + 2 <= that.totalPages ? currentPage + 2 : that.totalPages;
    }

    for (i = startNum; i <= endNum; i++) {
      var isActive = i == currentPage ? 'active' : '';
      pagesHtml += '<div class="page ' + isActive + '" data-page="' + i + '" role="button">' + i + '</div>';
    }
    html += '<nav class="pagination-controls">';
    html +=
      '<i class="la la-angle-left prev-page ' +
      prevClass +
      '" data-page="' +
      (currentPage - 1) +
      '" role="button"></i>';
    html += pagesHtml;
    html +=
      '<i class="la la-angle-right next-page ' +
      nextClass +
      '" data-page="' +
      (currentPage + 1) +
      '" role="button"></i>';
    html += '</nav> ';

    document.querySelectorAll(target)[0].innerHTML = html;

    //set on click listeners  after html on DOM
    var targets = document.querySelectorAll(target + '> .pagination-controls > *');
    for(var i=0; i<targets.length; i++) {
      targets[i].addEventListener('click', function (event) {
        var page = this.getAttribute('data-page');
        ve_sendGATrackerEvent('ClickedAnchor', 'yotporeviewpage_' + page);
        ve_sendFBTrackerEvent('YotPoReviewPaginate', {
          page: page
        });
        that.goToPage(page);
      });
    }
  };

  //put in a constructor ?
  if (this.totalPages === 1) {
    return;
  } else {
    this.buildPagination(1);
  }
}

function dynamicinsert_reviewShowMore(el, state) {
  var review_id = el.getAttribute('data-post-id');

  if (state == true) {
    //hide truncated posts
    document.querySelectorAll('.ve-truncated-post[data-post-id="' + review_id + '"]')[0].style.display = 'none';
    document.querySelectorAll('.ve-readmore[data-post-id="' + review_id + '"]')[0].style.display = 'none';

    //show full post - and read less button
    document.querySelectorAll('.ve-readless[data-post-id="' + review_id + '"]')[0].style.display = '';
    document.querySelectorAll('.ve-full-post[data-post-id="' + review_id + '"]')[0].style.display = '';
  } else if (state == false) {
    //hide full post - and read less button
    document.querySelectorAll('.ve-readless[data-post-id="' + review_id + '"]')[0].style.display = 'none';
    document.querySelectorAll('.ve-full-post[data-post-id="' + review_id + '"]')[0].style.display = 'none';

    //hide truncated posts
    document.querySelectorAll('.ve-truncated-post[data-post-id="' + review_id + '"]')[0].style.display = '';
    document.querySelectorAll('.ve-readmore[data-post-id="' + review_id + '"]')[0].style.display = '';
  }

  ve_sendGATrackerEvent('ClickedAnchor', 'yotporeviewshow_' + (state ? 'more' : 'less'));
  ve_sendGATrackerEvent('ClickedReview', review_id, 'show_' + (state ? 'more' : 'less'));
  ve_sendFBTrackerEvent('YotPoReviewShow' + (state ? 'More' : 'Less'), {
    review_id: review_id
  });
}

function dynamicinsert_openReviewImage(el) {
  var review_id = el.getAttribute('data-review-id');
  var img_src = el.getAttribute('data-original-src');
  var review_html = '<img src="' + img_src + '" class="review-og-img" data-review-id="' + review_id + '"/>';

  document.querySelectorAll('.ve-review-orignal-img--wrap[data-review-id="' + review_id + '"]')[0].innerHTML += review_html;

  document.querySelectorAll('.ve-review-modal-overlay')[0].style.display = 'block';
  document.querySelectorAll('.ve-review-img-modal[data-review-id="' + review_id + '"]')[0].style.display = 'block';

  ve_sendGATrackerEvent('ClickedAnchor', 'yotporeviewimage');
  ve_sendGATrackerEvent('ClickedReview', review_id, 'image_' + img_src);
  ve_sendFBTrackerEvent('YotPoReviewFullImage', {
    review_id: review_id,
    image_src: img_src
  });
}

function dynamicinsert_closeReviewImage(el) {
  var review_id = el.getAttribute('data-review-id');

  document.querySelectorAll('.ve-review-img-modal[data-review-id="' + review_id + '"]')[0].style.display = 'none';
  document.querySelectorAll('.ve-review-modal-overlay')[0].style.display = 'none';
  document.querySelectorAll('.review-og-img[data-review-id="' + review_id + '"]')[0].remove();
}
