

let questionnaire = {
    questions: [
        {
            "_id": "5ee87a1fa0f02600153bbc55",
            "question": {
                "items": [
                    {"text": "Sensitivity", "value": 0},
                    {"text": "Redness", "value": 1},
                    {"text": "Fine lines or wrinkles", "value": 2},
                    {"text": "Loss of firmness or elasticity", "short_text": "Firmness or elasticity", "value": 3},
                    {"text": "Hyperpigmentation", "value": 4},
                    {"text": "Acne", "value": 5},
                    {"text": "Dryness", "value": 6},
                    {"text": "Other", "value": 7}],
                "_id": "5bd0f2a48e113000132de32d",
                "heading": "What are your main skin concerns?",
                "type": "SelectMultiple",
                "group": "skin Concerns",
                "name": "concern",
                "validityCheck": false,
                "transition": {"title": true, "status": "3 minutes to your best skincare, let's get started!"},
                "transitionB": {"title": true, "status": "3 minutes to your best skincare, let's go!"},
                "createdAt": "2018-11-02T20:52:37.362Z",
                "updatedAt": "2019-11-08T18:22:02.470Z",
                "__v": 0,
                "subHeading": null,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        },
        {
            "_id": "5ee87a1fa0f02600153bbc56",
            "question": {
                "items": [],
                "_id": "5bd234ffd3917e0013f96623",
                "heading": "What other skin issues would you like to address?",
                "group": "Skin Concerns",
                "name": "concern_text",
                "type": "TextAutocomplete",
                "placeholder": "Enter concerns",
                "validityCheck": false,
                "createdAt": "2018-11-02T20:52:58.619Z",
                "updatedAt": "2019-11-07T23:02:11.421Z",
                "__v": 0,
                "subHeading": null,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 7}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc57",
            "question": {
                "items": [{
                    "name": "name",
                    "placeholder": "Your Name",
                    "autoComplete": "name",
                    "validityCheck": true
                }],
                "_id": "5da5128371447f00158cf098",
                "heading": "First things first, whose skin are we talking about?",
                "subHeading": null,
                "group": "Let's Make Your Formula",
                "name": "name",
                "type": "Text",
                "placeholder": "Your Name",
                "autoComplete": "name",
                "validityCheck": true,
                "createdAt": "2019-10-23T22:06:55.509Z",
                "updatedAt": "2020-01-17T23:46:17.720Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/quiz/formula-make-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc58",
            "question": {
                "items": [{"text": "Not sensitive", "value": 0}, {
                    "text": "Rarely sensitive",
                    "value": 1
                }, {"text": "Somewhat sensitive", "value": 2}, {
                    "text": "Often sensitive",
                    "value": 3
                }, {"text": "Very sensitive", "value": 4}],
                "_id": "5bd0f3108e113000132de32e",
                "heading": "How sensitive is your skin?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_sensitivity",
                "createdAt": "2018-11-02T20:53:08.716Z",
                "updatedAt": "2019-11-07T23:02:33.458Z",
                "__v": 0,
                "subHeading": "Skin sensitivity affects 45% of the population.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 0}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc59",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Sometimes", "value": 2}, {"text": "Often", "value": 3}],
                "_id": "5bd0f32b8e113000132de32f",
                "heading": "Do skincare products irritate your skin?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "sensitivity_irritation",
                "createdAt": "2018-11-02T20:53:17.620Z",
                "updatedAt": "2019-11-07T23:02:43.429Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f3108e113000132de32e",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc5a",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5bd0f4788e113000132de330",
                "heading": "Does your skin have a burning or tingling sensation for no obvious reason?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "sensitivity_burning",
                "createdAt": "2018-11-02T20:53:26.098Z",
                "updatedAt": "2019-11-07T23:02:51.633Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f3108e113000132de32e",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc5b",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "A little",
                    "value": 1
                }, {"text": "Somewhat", "value": 2}, {"text": "A lot", "value": 3}],
                "_id": "5bd0f4da8e113000132de331",
                "heading": "What about tautness or tightness?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "sensitivity_tightness",
                "createdAt": "2018-11-02T20:53:36.051Z",
                "updatedAt": "2019-11-07T23:02:59.370Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f3108e113000132de32e",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc5c",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Highly concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5bd0f6168e113000132de333",
                "heading": "How concerned are you with fine lines and wrinkles?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_wrinkles",
                "createdAt": "2018-11-02T20:53:55.238Z",
                "updatedAt": "2019-11-07T23:03:08.173Z",
                "__v": 0,
                "subHeading": "Wrinkles are a result from structural changes in the epidermis, dermis and hypodermis.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 2}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc5d",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "Somewhat concerned",
                    "value": 1
                }, {"text": "Very concerned", "value": 2}],
                "_id": "5bd0f6358e113000132de334",
                "heading": "Specifically, how concerned are you about wrinkles around the mouth or forehead?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "wrinkle_line",
                "createdAt": "2018-11-02T20:54:03.731Z",
                "updatedAt": "2019-11-07T23:03:15.770Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6168e113000132de333",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 2}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc5e",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {"text": "Very concerned", "value": 3}],
                "_id": "5bd0f65d8e113000132de335",
                "heading": "Are you concerned that your skin is thinning, wrinkled, and/or sagging?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "wrinkle_crepey",
                "createdAt": "2018-11-02T20:54:12.476Z",
                "updatedAt": "2019-11-07T23:03:23.727Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6168e113000132de333",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 2}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc5f",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {"text": "Very concerned", "value": 3}],
                "_id": "5bd0f6bf8e113000132de336",
                "heading": "And what about fine lines, wrinkles or crow's feet around the eyes?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "wrinkle_texture",
                "createdAt": "2018-11-02T20:54:21.243Z",
                "updatedAt": "2019-11-07T23:03:31.076Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6168e113000132de333",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 2}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc60",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Sometimes", "value": 2}, {"text": "Often", "value": 3}, {
                    "text": "Always",
                    "value": 4
                }],
                "_id": "5bd0f6ff8e113000132de337",
                "heading": "How often does your skin feel dry?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_dryness",
                "createdAt": "2018-11-02T20:54:30.365Z",
                "updatedAt": "2019-11-07T23:03:39.006Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 6}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc61",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "A little",
                    "value": 1
                }, {"text": "Somewhat", "value": 2}, {"text": "A lot", "value": 3}],
                "_id": "5bd0f71d8e113000132de338",
                "heading": "Does your skin feel itchy, especially at night?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "dryness_derm",
                "createdAt": "2018-11-02T20:54:39.787Z",
                "updatedAt": "2019-11-07T23:03:47.707Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6ff8e113000132de337",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 6}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc62",
            "question": {
                "items": [{"text": "No", "value": 0}, {"text": "Sometimes", "value": 1}, {
                    "text": "Yes",
                    "value": 2
                }],
                "_id": "5bd0f7408e113000132de339",
                "heading": "Does your skin feel (or look) flaky or scaly?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "dryness_flaking",
                "createdAt": "2018-11-02T20:54:48.554Z",
                "updatedAt": "2019-11-07T23:03:55.981Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6ff8e113000132de337",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 6}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc63",
            "question": {
                "items": [{"text": "No", "value": 0}, {"text": "Sometimes", "value": 1}, {
                    "text": "Yes",
                    "value": 2
                }],
                "_id": "5bd0f7608e113000132de33a",
                "heading": "Does your skin feel rough, patchy or uneven?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "dryness_patchy",
                "createdAt": "2018-11-02T20:54:59.343Z",
                "updatedAt": "2019-11-07T23:04:03.142Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f6ff8e113000132de337",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 6}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc64",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Sometimes", "value": 2}, {"text": "Often", "value": 3}, {
                    "text": "All the time",
                    "value": 4
                }],
                "_id": "5bd0f7a58e113000132de33c",
                "heading": "How often do you experience acne/breakouts?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_acne",
                "createdAt": "2018-11-02T20:55:17.687Z",
                "updatedAt": "2019-11-07T23:04:11.646Z",
                "__v": 0,
                "subHeading": "Understanding your acne type will enable us to formulate the right ingredients.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 5}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc65",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "Somewhat",
                    "value": 1
                }, {"text": "A lot", "value": 2}],
                "_id": "5bd0f8168e113000132de340",
                "heading": "Do you have blackheads (clogged pores) or whiteheads?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "acne_freq_comedone",
                "createdAt": "2018-11-02T20:55:53.410Z",
                "updatedAt": "2019-11-07T23:04:21.322Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f7a58e113000132de33c",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 5}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc66",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Somewhat", "value": 2}, {"text": "A lot", "value": 3}],
                "_id": "5bd0f7e18e113000132de33e",
                "heading": "Do you get bumps that are tender and inflamed, and look swollen and pink?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "acne_freq_bumps",
                "createdAt": "2018-11-02T20:55:36.214Z",
                "updatedAt": "2019-11-07T23:04:37.707Z",
                "__v": 0,
                "subHeading": "Acne may also be an indication of rosacea or allergies.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f7a58e113000132de33c",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 5}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc67",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "Somewhat",
                    "value": 1
                }, {"text": "A lot", "value": 2}],
                "_id": "5bd0f7bf8e113000132de33d",
                "heading": "What about large, red and inflamed pimples?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "acne_freq_pimples",
                "createdAt": "2018-11-02T20:55:27.643Z",
                "updatedAt": "2019-11-07T23:04:45.908Z",
                "__v": 0,
                "subHeading": null,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f7a58e113000132de33c",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 5}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc68",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Sometimes",
                    "value": 1
                }, {"text": "Often", "value": 2}],
                "_id": "5bd0f7fb8e113000132de33f",
                "heading": "How often do you experience those bumps/pimples?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "acne_freq_papule",
                "createdAt": "2018-11-02T20:55:45.067Z",
                "updatedAt": "2019-11-07T23:04:53.259Z",
                "__v": 0,
                "subHeading": "Cystic acne requires intensive intervention with specific ingredients.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f7e18e113000132de33e",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5bd0f7bf8e113000132de33d",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 5
                }, {"question": "5bd0f7a58e113000132de33c", "item": "", "op": "lte", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc69",
            "question": {
                "items": [{"text": "Not at all concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Very concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5bd0f83a8e113000132de341",
                "heading": "How concerned are you about losing skin elasticity or firmness?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_firmness",
                "createdAt": "2018-11-02T20:56:03.771Z",
                "updatedAt": "2019-11-07T23:05:01.085Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 3}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc6a",
            "question": {
                "items": [{"text": "Not at all concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Very concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5bd0f8848e113000132de342",
                "heading": "What about sagging jowls or drooping around the nose and mouth areas?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "elasticity_sagging",
                "createdAt": "2018-11-02T20:56:12.419Z",
                "updatedAt": "2019-11-07T23:05:14.606Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f83a8e113000132de341",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc6b",
            "question": {
                "items": [{"text": "Not at all concerned", "value": 0}, {
                    "text": "Somewhat concerned",
                    "value": 1
                }, {"text": "Very concerned", "value": 2}],
                "_id": "5bd0f9418e113000132de343",
                "heading": "How concerned are you about droopy eyelids or bags around the eye area?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "elasticity_definition",
                "createdAt": "2018-11-02T20:56:20.846Z",
                "updatedAt": "2019-11-07T23:05:22.048Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f83a8e113000132de341",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc6c",
            "question": {
                "items": [{"text": "Not at all concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Very concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5bd0f95f8e113000132de344",
                "heading": "And are you concerned about volume loss on your facial skin?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "elasticity_volume",
                "createdAt": "2018-11-02T20:56:28.423Z",
                "updatedAt": "2019-11-07T23:05:32.658Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f83a8e113000132de341",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc6d",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "A little",
                    "value": 1
                }, {"text": "Somewhat", "value": 2}, {"text": "A lot", "value": 3}, {"text": "Always", "value": 4}],
                "_id": "5bd0f98f8e113000132de346",
                "heading": "How often do you experience facial redness?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_redness",
                "createdAt": "2018-11-02T20:56:38.891Z",
                "updatedAt": "2019-11-07T23:05:41.085Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc6e",
            "question": {
                "items": [{"text": "Yes, all of it", "value": 3}, {
                    "text": "Yes, some of it",
                    "value": 2
                }, {"text": "Only a little", "value": 1}, {"text": "It's caused by something else", "value": 0}],
                "_id": "5d1a2f6da4a7b10015324abb",
                "heading": "Is the redness on your face caused by acne?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "redness_acne",
                "createdAt": "2019-07-01T16:06:05.184Z",
                "updatedAt": "2019-11-07T23:05:49.855Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {"question": "5bd0f98f8e113000132de346", "item": "", "op": "lte", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc6f",
            "question": {
                "items": [{"text": "Rosacea", "value": 0}, {
                    "text": "Seborrhoeic Dermatitis",
                    "value": 1
                }, {"text": "Facial Psoriasis", "value": 2}, {
                    "text": "Eczema/Atopic Dermatitis",
                    "value": 3
                }, {"text": "I’m not sure", "value": 4}],
                "_id": "5d0ac1a766ef870015ec447a",
                "heading": "Have you been diagnosed with any of these skin conditions?",
                "name": "redness_diag",
                "group": "Skin Concerns",
                "type": "SelectMultiple",
                "createdAt": "2019-06-19T23:13:43.018Z",
                "updatedAt": "2019-11-07T23:05:59.064Z",
                "__v": 0,
                "validityCheck": false,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {"question": "5bd0f98f8e113000132de346", "item": "", "op": "lte", "rhs": 0}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc70",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5bd20e42fa8c54001387bf02",
                "heading": "And is the redness usually persistent?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "redness_persistent",
                "createdAt": "2018-11-02T20:56:47.379Z",
                "updatedAt": "2019-11-07T23:06:07.948Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {
                    "question": "5bd0f98f8e113000132de346",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {
                    "question": "5d1a2f6da4a7b10015324abb",
                    "item": "",
                    "op": "contains",
                    "rhs": 3
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 1
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 2
                }, {"question": "5d0ac1a766ef870015ec447a", "item": "", "op": "contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc71",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "A little",
                    "value": 1
                }, {"text": "Somewhat", "value": 2}, {"text": "Very", "value": 3}, {
                    "text": "Extremely",
                    "value": 4
                }],
                "_id": "5bd0fa568e113000132de347",
                "heading": "Does your skin blush or flush easily?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "redness_episodic",
                "createdAt": "2018-11-02T20:56:56.251Z",
                "updatedAt": "2019-11-07T23:06:15.961Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {
                    "question": "5bd0f98f8e113000132de346",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {
                    "question": "5d1a2f6da4a7b10015324abb",
                    "item": "",
                    "op": "contains",
                    "rhs": 3
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 1
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 2
                }, {"question": "5d0ac1a766ef870015ec447a", "item": "", "op": "contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc72",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Sometimes", "value": 2}, {"text": "Often", "value": 3}, {
                    "text": "All the time",
                    "value": 4
                }],
                "_id": "5bd0fa6a8e113000132de348",
                "heading": "Do you have oily patches or flaky skin on your face and scalp (including dandruff)?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "redness_flaky",
                "createdAt": "2018-11-02T20:57:05.558Z",
                "updatedAt": "2019-11-07T23:06:25.443Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {
                    "question": "5bd0f98f8e113000132de346",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {
                    "question": "5d1a2f6da4a7b10015324abb",
                    "item": "",
                    "op": "contains",
                    "rhs": 3
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 1
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 2
                }, {"question": "5d0ac1a766ef870015ec447a", "item": "", "op": "contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc73",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5bd0fa7c8e113000132de349",
                "heading": "Can you see small clusters of capillaries near the surface of your skin?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "redness_vessels",
                "createdAt": "2018-11-02T20:57:14.123Z",
                "updatedAt": "2019-11-07T23:06:36.422Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0f2a48e113000132de32d",
                    "item": "",
                    "op": "not_contains",
                    "rhs": 1
                }, {
                    "question": "5bd0f98f8e113000132de346",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {
                    "question": "5d1a2f6da4a7b10015324abb",
                    "item": "",
                    "op": "contains",
                    "rhs": 3
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 0
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 1
                }, {
                    "question": "5d0ac1a766ef870015ec447a",
                    "item": "",
                    "op": "contains",
                    "rhs": 2
                }, {"question": "5d0ac1a766ef870015ec447a", "item": "", "op": "contains", "rhs": 3}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc74",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Highly concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5bd0fa968e113000132de34a",
                "heading": "How much of a concern is hyperpigmentation for you?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "Q1_pigmentation",
                "createdAt": "2018-11-02T20:57:23.793Z",
                "updatedAt": "2019-11-07T23:06:45.735Z",
                "__v": 0,
                "subHeading": "",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 4}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc75",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "Partially", "value": 1}, {
                    "text": "No",
                    "value": 0
                }, {"text": "Not sure", "value": 0.5}],
                "_id": "5b4587c2dc0957fe3429d9d0",
                "heading": "Did you notice more hyperpigmentation appearing after sun exposure?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "pigmentation_sun",
                "createdAt": "2018-07-16T23:33:26.315Z",
                "updatedAt": "2019-11-07T23:06:53.995Z",
                "__v": 0,
                "subHeading": "Sun-induced hyperpigmentation can be lessened with the right brighteners.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0fa968e113000132de34a",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 4}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc76",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "Partially", "value": 1}, {
                    "text": "No",
                    "value": 0
                }, {"text": "Not sure", "value": 0.5}],
                "_id": "5b458356dc0957fe3429d9cd",
                "heading": "Do the hyperpigmentation spots feel raised or bumpy on your skin?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "pigmentation_raise",
                "createdAt": "2018-07-16T23:30:27.531Z",
                "updatedAt": "2019-11-07T23:07:02.047Z",
                "__v": 0,
                "subHeading": "Seborrheic Keratosis are raised bumps that are harmless to your health.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0fa968e113000132de34a",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 4}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc77",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "Partially", "value": 1}, {
                    "text": "No",
                    "value": 0
                }, {"text": "Not sure", "value": 0.5}],
                "_id": "5b81fa4af815e854f3222509",
                "heading": "Did hormonal changes cause or worsen your hyperpigmentation?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "pigmentation_hormones",
                "createdAt": "2018-08-26T00:56:10.165Z",
                "updatedAt": "2019-11-07T23:07:10.331Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0fa968e113000132de34a",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 4}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc78",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "Partially", "value": 1}, {
                    "text": "No",
                    "value": 0
                }, {"text": "Not sure", "value": 0.5}],
                "_id": "5b458671dc0957fe3429d9cf",
                "heading": "Is the hyperpigmentation the result of acne, acne scarring or other skin injuries?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "pigmentation_acne",
                "createdAt": "2018-07-16T23:31:41.674Z",
                "updatedAt": "2019-11-07T23:07:18.188Z",
                "__v": 0,
                "subHeading": "For some skin tones, certain active ingredients will worsen post-inflammatory hyperpigmentation.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            },
            "filter": {
                "or": [{
                    "question": "5bd0fa968e113000132de34a",
                    "item": "",
                    "op": "lte",
                    "rhs": 0
                }, {"question": "5bd0f2a48e113000132de32d", "item": "", "op": "not_contains", "rhs": 4}]
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc79",
            "question": {
                "items": [{"text": "Not concerned", "value": 0}, {
                    "text": "A little concerned",
                    "value": 1
                }, {"text": "Somewhat concerned", "value": 2}, {
                    "text": "Highly concerned",
                    "value": 3
                }, {"text": "Extremely concerned", "value": 4}],
                "_id": "5da617862b2b6c0015b7b251",
                "heading": "Are you concerned with dark circles under or around the eyes?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "circle_eyes",
                "subHeading": "",
                "createdAt": "2019-10-23T22:13:24.481Z",
                "updatedAt": "2019-11-07T23:07:26.052Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7a",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5da23a6a328a570015f2a265",
                "heading": "Does your current skincare routine address all of your skin concerns?",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "name": "skincare_concern",
                "subHeading": null,
                "createdAt": "2019-10-12T20:41:14.649Z",
                "updatedAt": "2019-11-07T23:07:34.241Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7b",
            "question": {
                "items": [{"text": "Tight or dry", "value": 1}, {
                    "text": "Comfortable",
                    "value": 2
                }, {"text": "Oily in t-zone", "value": 3}, {"text": "Oily", "value": 4}, {
                    "text": "Not sure",
                    "value": 2.5
                }],
                "_id": "5cd49f24b9e3a2001525cc6d",
                "heading": "When you wake up in the morning, your skin feels:",
                "name": "skin_morning",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "subHeading": "This is, at times, a more accurate assessment of your skin type.",
                "createdAt": "2019-05-09T21:44:04.276Z",
                "updatedAt": "2019-11-07T23:07:42.265Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7c",
            "question": {
                "items": [{"text": "Matte", "value": 1}, {
                    "text": "Mostly matte",
                    "value": 2
                }, {"text": "Sometimes shiny", "value": 3}, {
                    "text": "I shine like a diamond",
                    "value": 4
                }, {"text": "I've never noticed anything", "value": 2.5}],
                "_id": "5cd4a2d2b9e3a2001525cc6e",
                "heading": "In photos, your skin tends to appear:",
                "name": "skin_photos",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "subHeading": null,
                "createdAt": "2019-05-09T21:59:46.991Z",
                "updatedAt": "2019-11-07T23:07:50.098Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7d",
            "question": {
                "items": [{"text": "Tight or dry", "value": 1}, {
                    "text": "No particular sensation",
                    "value": 2
                }, {"text": "Slight sheen", "value": 3}, {
                    "text": "Oily",
                    "value": 4
                }, {"text": "I've never noticed anything", "value": 2.5}],
                "_id": "5cd4a379b9e3a2001525cc6f",
                "heading": "After a shower, your face tends to feel:",
                "name": "skin_shower",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "subHeading": null,
                "createdAt": "2019-05-09T22:02:33.280Z",
                "updatedAt": "2019-11-07T23:08:11.686Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7e",
            "question": {
                "items": [{"text": "Dry", "value": 1}, {
                    "text": "Neutral/Normal",
                    "value": 2
                }, {"text": "Combination", "value": 3}, {"text": "Oily", "value": 4}, {
                    "text": "Not Sure",
                    "value": 2.5
                }],
                "_id": "5cd49e4cb9e3a2001525cc6c",
                "heading": "How would you describe your skin type?",
                "name": "skin_type",
                "type": "SelectOne",
                "group": "Skin Concerns",
                "subHeading": "Your skin type determines the type of hydrating and moisturizing ingredients to include.",
                "createdAt": "2019-05-09T21:40:28.456Z",
                "updatedAt": "2019-11-07T23:08:20.347Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skin-concern2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc7f",
            "question": {
                "items": [{"text": "Very Fair/Very Light", "value": 1}, {
                    "text": "Fair/Light",
                    "value": 2
                }, {"text": "Olive or Medium", "value": 3}, {
                    "text": "Light Brown",
                    "value": 6
                }, {"text": "Dark Brown", "value": 4}, {"text": "Very Dark", "value": 5}, {
                    "text": "Not sure",
                    "value": 0
                }],
                "_id": "5cd4a422b9e3a2001525cc70",
                "heading": "How would you describe your skin tone (your melanin level)?",
                "type": "SelectOne",
                "group": "Heritage",
                "name": "skintone",
                "subHeading": "Different skin tones respond differently to active ingredients.",
                "createdAt": "2019-05-09T22:05:22.781Z",
                "updatedAt": "2019-11-07T23:08:29.552Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/heritage-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc80",
            "question": {
                "items": [{"text": "20 or below", "value": 0}, {
                    "text": "21-26",
                    "value": 1
                }, {"text": "27-33", "value": 2}, {"text": "34-39", "value": 3}, {
                    "text": "40-46",
                    "value": 4
                }, {"text": "47-54", "value": 5}, {"text": "55-64", "value": 6}, {"text": "65+", "value": 7}],
                "_id": "5bd0faf38e113000132de34b",
                "heading": "How old are you?",
                "type": "SelectOne",
                "group": "Heritage",
                "name": "age",
                "transition": {"title": true, "status": "Just a couple questions about you."},
                "createdAt": "2018-11-02T20:58:44.527Z",
                "updatedAt": "2019-11-07T23:08:42.088Z",
                "__v": 0,
                "subHeading": "Your age is an important factor in determining your dermal biometrics.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/heritage-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc81",
            "question": {
                "items": [{"text": "Female", "value": 0}, {
                    "text": "Male",
                    "value": 1
                }, {"text": "Non-binary", "value": 3}, {"text": "I'd rather not say", "value": 2}],
                "_id": "5cd4a48bb9e3a2001525cc71",
                "heading": "What is your gender?",
                "type": "SelectOne",
                "group": "Heritage",
                "name": "gender2",
                "subHeading": "Men and women have different skin thickness, pH levels, and exfoliation needs.",
                "createdAt": "2019-05-09T22:07:07.836Z",
                "updatedAt": "2019-11-07T23:08:51.028Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/heritage-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc82",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5b4597a8dc0957fe3429d9dd",
                "heading": "Are you pregnant, breastfeeding or about to be?",
                "type": "SelectOne",
                "group": "Heritage",
                "name": "pregnant",
                "createdAt": "2018-07-16T23:44:16.686Z",
                "updatedAt": "2020-01-17T23:45:10.301Z",
                "__v": 0,
                "subHeading": "Pregnancy/breastfeeding requires special care and exclusion of many active ingredients including retinoids.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/heritage-icon.svg"
            },
            "filter": {"or": [{"question": "5cd4a48bb9e3a2001525cc71", "item": "", "op": "eq", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc83",
            "question": {
                "items": [{"text": "2 or less", "value": 0}, {
                    "text": "3 - 4",
                    "value": 1
                }, {"text": "5 - 6", "value": 2}, {"text": "7 - 8", "value": 3}, {"text": "9 or more", "value": 4}],
                "_id": "5b459bfddc0957fe3429d9e2",
                "heading": "How many glasses of water do you drink per day?",
                "name": "water",
                "type": "SelectOne",
                "group": "Style of Life",
                "createdAt": "2018-07-16T23:46:13.950Z",
                "updatedAt": "2019-11-07T23:09:23.283Z",
                "__v": 0,
                "transition": {"title": true, "status": "Let’s talk lifestyle."},
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc84",
            "question": {
                "items": [{"text": "4 or less", "value": 0}, {
                    "text": "5 - 6",
                    "value": 1
                }, {"text": "7 - 8", "value": 2}, {"text": "9 - 10", "value": 3}, {
                    "text": "11 or more",
                    "value": 4
                }],
                "_id": "5b459a19dc0957fe3429d9e0",
                "heading": "On average, how many hours of sleep do you get per night?",
                "type": "SelectOne",
                "group": "Style of Life",
                "name": "sleep",
                "createdAt": "2018-07-16T23:45:36.709Z",
                "updatedAt": "2019-11-07T23:09:31.546Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc85",
            "question": {
                "items": [{"text": "Not stressed", "value": 0}, {
                    "text": "Mildly stressed",
                    "value": 1
                }, {"text": "Moderately stressed", "value": 2}, {
                    "text": "Very stressed",
                    "value": 3
                }, {"text": "Extremely stressed", "value": 4}],
                "_id": "5b459ce0dc0957fe3429d9e3",
                "heading": "How stressed are you?",
                "name": "stress",
                "type": "SelectOne",
                "group": "Style of Life",
                "createdAt": "2018-07-16T23:47:35.583Z",
                "updatedAt": "2019-11-07T23:09:39.731Z",
                "__v": 0,
                "subHeading": "Stress is linked to premature aging, skin inflammation and the onset or aggregation of skin diseases.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc86",
            "question": {
                "items": [{"text": "Veggies and Fruits", "value": 0}, {
                    "text": "Sugars or refined carbs",
                    "value": 1
                }, {"text": "Processed meats", "value": 2}, {"text": "Dairy", "value": 3}, {
                    "text": "Alcohol",
                    "value": 4
                }, {"text": "Vitamins and supplements", "value": 5}],
                "_id": "5cd4a7bab9e3a2001525cc73",
                "heading": "Which of the following items do you consume almost every day?",
                "type": "SelectMultiple",
                "group": "Style of Life",
                "name": "dietary",
                "subHeading": null,
                "createdAt": "2019-05-09T22:20:42.655Z",
                "updatedAt": "2019-11-07T23:09:47.752Z",
                "__v": 0,
                "validityCheck": false,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc87",
            "question": {
                "items": [{"text": "Not at all", "value": 0}, {
                    "text": "A couple of times a year",
                    "value": 1
                }, {"text": "About once or twice a quarter", "value": 2}, {
                    "text": "Every month",
                    "value": 3
                }, {"text": "Every other week or weekly", "value": 4}],
                "_id": "5bd9f36e6464310013eeb830",
                "heading": "How often do you travel on a plane?",
                "name": "travel",
                "type": "SelectOne",
                "group": "Style of Life",
                "createdAt": "2018-11-02T21:01:22.921Z",
                "updatedAt": "2019-11-07T23:09:56.068Z",
                "__v": 0,
                "subHeading": "Airplane cabins are very dry with high UV exposure.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc88",
            "question": {
                "items": [{"text": "0-3 hours", "value": 0}, {
                    "text": "4-6 hours",
                    "value": 1
                }, {"text": "7-9 hours", "value": 2}, {
                    "text": "10-12 hours",
                    "value": 3
                }, {"text": "When I'm awake", "value": 4}],
                "_id": "5cd4a882b9e3a2001525cc74",
                "heading": "How many hours a day are you in front of a digital screen? (Cellphone, Computer, TV)",
                "subHeading": "Digital pollution requires special blue and HEV light-inhibiting ingredients.",
                "name": "digital",
                "type": "SelectOne",
                "group": "Style of Life",
                "createdAt": "2019-05-09T22:24:02.205Z",
                "updatedAt": "2019-11-07T23:10:04.510Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc89",
            "question": {
                "items": [{"text": "None", "value": 0}, {
                    "text": "1 or less",
                    "value": 1
                }, {"text": "2-3 hours", "value": 2}, {"text": "4-6 hours", "value": 3}, {
                    "text": "7 or more",
                    "value": 4
                }],
                "_id": "5cd4a913b9e3a2001525cc75",
                "heading": "How much time do you spend under direct sun exposure per day?",
                "name": "daylight",
                "type": "SelectOne",
                "group": "Style of Life",
                "subHeading": "We're calculating your optimal SPF and antioxidant strength.",
                "createdAt": "2019-05-09T22:26:27.801Z",
                "updatedAt": "2019-11-07T23:10:13.592Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/lifestyle2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc8a",
            "question": {
                "items": [{"text": "Cleanser", "value": 0}, {
                    "text": "Day moisturizer",
                    "value": 1
                }, {"text": "SPF", "value": 2}, {"text": "Serum/emulsion/booster", "value": 3}, {
                    "text": "Toner",
                    "value": 4
                }, {"text": "Night cream", "value": 5}, {"text": "Eye cream", "value": 6}],
                "_id": "5cd4a9d2b9e3a2001525cc76",
                "heading": "Which of the following skincare products do you use almost every day?",
                "name": "regimen",
                "type": "SelectMultiple",
                "group": "Skincare History",
                "subHeading": null,
                "createdAt": "2019-05-09T22:29:38.529Z",
                "updatedAt": "2019-11-07T23:10:22.973Z",
                "__v": 0,
                "validityCheck": false,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc8b",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5bd0fc8e8e113000132de356",
                "heading": "Do you use any retinol-based products?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "regimen3_retinol",
                "createdAt": "2018-11-02T21:02:28.522Z",
                "updatedAt": "2019-11-07T23:10:31.207Z",
                "__v": 0,
                "subHeading": "Certain ingredients and skin conditions are incompatible with retinol.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc8c",
            "question": {
                "items": [{"text": "less than 0.04%", "value": 1}, {
                    "text": "0.04% - 0.10%",
                    "value": 2
                }, {"text": "0.11% - 0.25%", "value": 3}, {
                    "text": "0.26% - 0.50%",
                    "value": 4
                }, {"text": "0.51% - 0.75%", "value": 5}, {
                    "text": "0.76% - 1.00%",
                    "value": 6
                }, {"text": "more than 1.00%", "value": 7}, {"text": "I don't know", "value": 0}],
                "_id": "5b82ab29f08c5f5772933d33",
                "heading": "Do you know the strength of your retinol?",
                "name": "retinol",
                "type": "SelectOne",
                "group": "Skincare History",
                "createdAt": "2018-08-26T13:30:15.824Z",
                "updatedAt": "2019-11-07T23:10:40.846Z",
                "__v": 0,
                "subHeading": "Retinol can cause irritation. Your skin may need extra soothers",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            },
            "filter": {"or": [{"question": "5bd0fc8e8e113000132de356", "item": "", "op": "lte", "rhs": 0}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc8d",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5cd4aa55b9e3a2001525cc77",
                "heading": "Do you wear makeup?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "makeupboolean",
                "subHeading": null,
                "createdAt": "2019-05-09T22:31:49.743Z",
                "updatedAt": "2019-11-07T23:10:48.383Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc8e",
            "question": {
                "items": [{"text": "Never", "value": 0}, {
                    "text": "Rarely",
                    "value": 1
                }, {"text": "Sometimes", "value": 2}, {"text": "Often", "value": 3}, {
                    "text": "Always",
                    "value": 4
                }],
                "_id": "5b82b4511f24fa57bcc6d6c0",
                "heading": "How consistently do you remove makeup after you wear it?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "makeup",
                "createdAt": "2018-08-26T14:09:12.487Z",
                "updatedAt": "2019-11-07T23:10:56.314Z",
                "__v": 0,
                "subHeading": "We’re working on the best cleanser for your makeup habits.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            },
            "filter": {"or": [{"question": "5cd4aa55b9e3a2001525cc77", "item": "", "op": "eq", "rhs": 0}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc8f",
            "question": {
                "items": [{"text": "Wet Shave", "value": 1}, {
                    "text": "Electric Razor",
                    "value": 2
                }, {"text": "Don't Shave", "value": 3}],
                "_id": "5b45952fdc0957fe3429d9db",
                "heading": "How do you shave?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "hair",
                "createdAt": "2018-07-16T23:41:38.080Z",
                "updatedAt": "2019-11-07T23:11:07.865Z",
                "__v": 0,
                "subHeading": "Different shaving techniques result in different levels of skin exfoliation.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            },
            "filter": {"or": [{"question": "5cd4a48bb9e3a2001525cc71", "item": "", "op": "ne", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc90",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5b459651dc0957fe3429d9dc",
                "heading": "Do you get ingrown hairs after shaving?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "ingrown",
                "createdAt": "2018-07-16T23:42:09.108Z",
                "updatedAt": "2019-11-07T23:11:14.616Z",
                "__v": 0,
                "subHeading": "Chemical non-toxic exfoliants can help ease discomfort by freeing trapped hairs.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            },
            "filter": {"or": [{"question": "5cd4a48bb9e3a2001525cc71", "item": "", "op": "ne", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc91",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5b459174dc0957fe3429d9d8",
                "heading": "Do you use a topical prescription on your face?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "prescription",
                "createdAt": "2018-07-16T23:38:57.077Z",
                "updatedAt": "2019-11-07T23:11:22.696Z",
                "__v": 0,
                "subHeading": "Certain ingredients are incompatible with prescription-level ingredients.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc92",
            "question": {
                "items": [],
                "_id": "5b45932bdc0957fe3429d9d9",
                "heading": "Please list them here:",
                "group": "Skincare History",
                "name": "prescription_text",
                "type": "TextAutocomplete",
                "createdAt": "2018-07-16T23:39:22.607Z",
                "updatedAt": "2019-11-07T23:11:29.656Z",
                "__v": 0,
                "validityCheck": false,
                "placeholder": "Enter Here",
                "subHeading": "We’re determining the best formulas to complement your existing skincare routine.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            },
            "filter": {"or": [{"question": "5b459174dc0957fe3429d9d8", "item": "", "op": "ne", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc93",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5b458f8edc0957fe3429d9d6",
                "heading": "Are there any commonly used skincare ingredients that you’re deathly allergic to?",
                "type": "SelectOne",
                "group": "Skincare History",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg",
                "name": "allergy",
                "createdAt": "2018-07-16T23:37:34.874Z",
                "updatedAt": "2018-07-30T02:54:48.217Z",
                "__v": 0
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc94",
            "question": {
                "items": [],
                "_id": "5b4590a2dc0957fe3429d9d7",
                "heading": "Please list them here:",
                "group": "Skincare History",
                "name": "allergy_text",
                "type": "Text",
                "placeholder": "Enter Here",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg",
                "createdAt": "2018-07-16T23:38:13.255Z",
                "updatedAt": "2018-09-05T23:21:20.102Z",
                "__v": 0,
                "validityCheck": false
            },
            "filter": {"or": [{"question": "5b458f8edc0957fe3429d9d6", "item": "", "op": "ne", "rhs": 1}]}
        }, {
            "_id": "5ee87a1fa0f02600153bbc95",
            "question": {
                "items": [{"text": "Yes", "value": 1}, {"text": "No", "value": 0}],
                "_id": "5da239f5328a570015f2a261",
                "heading": "Do your current skincare products take into account your locality and lifestyle?",
                "type": "SelectOne",
                "group": "Skincare History",
                "name": "skincare_factor",
                "subHeading": null,
                "createdAt": "2019-10-12T20:39:17.297Z",
                "updatedAt": "2019-11-07T23:11:43.774Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/skincare-history-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc96",
            "question": {
                "items": [],
                "_id": "5b459e91dc0957fe3429d9e6",
                "heading": "Where you live affects your skin, what's your zip?",
                "name": "zip",
                "group": "Environment",
                "type": "Text",
                "createdAt": "2018-07-16T23:48:44.412Z",
                "updatedAt": "2019-11-07T23:11:35.880Z",
                "__v": 0,
                "placeholder": "Enter Zip Code",
                "subHeading": "Localized factors such as pollution, weather and UV have a direct impact on your skin.",
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/results/location2-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc97",
            "question": {
                "items": [{
                    "name": "email",
                    "placeholder": "Enter Your Email",
                    "autoComplete": "email",
                    "validityCheck": true,
                    "type": "text"
                }],
                "_id": "5da60263dc8d26001511c959",
                "heading": "Where should we send your results?",
                "subHeading": null,
                "group": "Your Formula Is Ready",
                "name": "email",
                "type": "Text",
                "placeholder": "Your email",
                "autoComplete": "email",
                "validityCheck": true,
                "createdAt": "2019-10-23T22:17:45.810Z",
                "updatedAt": "2019-11-07T23:11:50.205Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/quiz/formula-ready-icon.svg"
            }
        }, {
            "_id": "5ee87a1fa0f02600153bbc98",
            "question": {
                "items": [{
                    "name": "name",
                    "type": "Text",
                    "placeholder": "Enter Name",
                    "enable": false,
                    "autoComplete": null,
                    "validityCheck": true,
                    "populateFrom": "name"
                }, {
                    "name": "email",
                    "type": "Text",
                    "placeholder": "Enter Email",
                    "enable": false,
                    "autoComplete": null,
                    "validityCheck": true,
                    "populateFrom": "email"
                }, {
                    "name": "password",
                    "type": "Text",
                    "placeholder": "Enter password",
                    "enable": true,
                    "autoComplete": "new-password",
                    "validityCheck": true,
                    "populateFrom": null
                }],
                "_id": "5da5f9d7dc8d26001511c958",
                "heading": "To protect your privacy, please create a password.",
                "subHeading": null,
                "group": "Privacy",
                "name": "signup",
                "type": "Signup",
                "createdAt": "2019-10-23T22:18:28.581Z",
                "updatedAt": "2019-11-07T23:11:59.239Z",
                "__v": 0,
                "groupImage": "http://dl7bo1dy930sf.cloudfront.net/img/quiz/privacy-icon.svg"
            }
        }],
    user: ''
}
let userResponseSkelaton = {}
questionnaire.questions.forEach(function(item) {
    userResponseSkelaton[item._id] = null
});
// let userResponseSkelaton = Array(questionnaire.questions.length).fill(null);
Vue.createApp({
    delimiters: ['${', '}']
    data() {
        return {
            count: 1,
            quiz: questionnaire,
            questionIndex: 0,
            userResponses: userResponseSkelaton,
            isActive: false
        }
    },
    filters: {
        charIndex: function(i) {
            return String.fromCharCode(97 + i);
        }
    },
    methods: {
        selectOption: function(questionID, answer) {
            console.log('Question: '+ questionID+ ' Answer: '+ answer)
            this.userResponses[questionID] = answer
            this.next()
        },
        next: function() {
            if (this.questionIndex < this.quiz.questions.length)
                this.questionIndex++
        },

        prev: function() {
            if (this.quiz.questions.length > 0) this.questionIndex--
        },
    }
}).mount('#quiz')