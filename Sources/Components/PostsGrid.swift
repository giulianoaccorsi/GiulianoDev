//
//  PostsGrid.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

struct PostsGrid: HTML {
    
    var articles: [Article]
    
    var body: some HTML {
        Grid {
            ForEach(articles) { article in
                LinkGroup(target: article.path) {
                    BlogPostCard(article: article)
                        .hoverEffect { hoverItem in
                            hoverItem.body
                                .cornerRadius(20)
                                .shadow(.gray, radius: 15, x: 5, y: 5)
                        }
                        .transition(.scale(from: 1, to: 1.01), on: .hover)
                }
                .class("link-primary")
                .width(12)
            }
        }
        .class("justify-content-between")
    }
}
