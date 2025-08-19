//
//  SocialFooter.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

struct SocialFooter: HTML {
    var body: some HTML {
        Text {
            for item in Social.allCases {
                item
            }
        }
        .margin(.zero)
        .font(.title1)
    }
}
