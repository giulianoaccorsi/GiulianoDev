//
//  Home.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Foundation
import Ignite

struct Home: StaticPage {
    
    let title = "Home"
    let layout = MainLayout {
        HeroSection.requiredMeta
    } deferredContent: {
        HeroSection.requiredScript
    }
    
    var body: some HTML {
        let conditionalBreak = "<br class=\"d-xs-inline d-sm-none\" />"
        HeroSection(
            title: "Code, Build & Repeat",
            subtitle: "Thoughts on \(conditionalBreak)",
            typewriterData: ["Hacking", "CleanCode", "Debugging", "PixelPerfect"]
        )
        
        aboutMe
        
        latestPost
    }
    
    private var aboutMe: some HTML {
        Section {
            Image("/media/PixAvatar.png", description: "Pixelated avatar of me")
                .resizable()
                .frame(width: 100)
                .class("float-start", "rounded-circle")
                .border(.black, width: 2)
                .class("bg-body-secondary")
                .margin(.trailing, .medium)
                .margin(.bottom, .small)
            
            Text("About me")
                .font(.title2)
            Text {
                "Hi, I’m "
                Strong("Giuliano")
                " — but most people know me as "
                Strong("Giu.")
                "<br>"
                    """
                    I’m an iOS Engineer who believes great apps \
                    are built where clean code meets delightful design. \
                    With \(Date.yearsOfExp) years of experience, \
                    I’ve crafted apps from fintech to creative tools, \
                    always chasing that balance of performance and simplicity.
                    """
            }
            Text {
                    """
                    Outside of code, you’ll catch me \
                    playing video games, board games, sketching new app ideas, \
                    or tinkering with languages I probably should’ve mastered already.
                    """
            }
            Text {
                    """
                    This space is where I share projects, ideas, \
                    and experiments — fueled by coffee, curiosity, \
                    and the drive to keep learning.
                    """
            }
        }
    }
    
    private var latestPost: some HTML {
        Section {
            Text("Latest projects").font(.title2)
            HighlightCard(
                title: "PokeStudy",
                blurb: "The PokeStudy app uses the PokeAPI to display detailed information about Pokémon, including stats, abilities, and types. Tapping on a Pokémon will route you to the details screen, which contains comprehensive information about the Pokémon, such as attributes, abilities, and weaknesses.",
                imagePath: "/media/projects/pokemonApp.png",
                technologies: ["SwiftUI", "MVVM", "Combine", "Unit Test"],
                appStoreURL: nil,
                githubURL: "https://github.com/giulianoaccorsi/PokeStudyApp"
            )
            .class("container my-5")
        }
        .padding(.vertical, .large)
    }
}

