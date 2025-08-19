//
//  Site.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Foundation
import Ignite

@main
struct IgniteWebsite {
    static func main() async {
        var site = ExampleSite()

        do {
            try await site.publish()
        } catch {
            print(error.localizedDescription)
        }
    }
}

struct ExampleSite: Site {    
    var name = "Giuliano Dev"
    var titleSuffix = " – GiuDev"
    var url = URL(static: "https://tomo.codes")
    /// Manually passed as custom component to HEAD
    var favicon: URL? = nil
    var builtInIconsEnabled: BootstrapOptions = .remoteBootstrap
    var useDefaultBootstrapURLs: BootstrapOptions = .remoteBootstrap

    var author = "Giuliano Accorsi"
    
    var lightTheme: (any Theme)? = LightTheme()
    var darkTheme: (any Theme)? = DarkTheme()
    
    var syntaxHighlighterConfiguration = SyntaxHighlighterConfiguration(
        languages: [.swift, .bash]
    )

    var homePage = Home()
    var layout = MainLayout()
    var articlePages: [any ArticlePage] = [DefaultArticlePage()]
}
