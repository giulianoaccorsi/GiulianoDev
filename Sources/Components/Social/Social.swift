//
//  Social.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

@MainActor
enum Social: String, CaseIterable, Sendable, InlineElement {
    case github, linkedin, instagram
    
    var body: some InlineElement {
        Link(icon, target: urlString)
            .target(.newWindow)
            .relationship(.noOpener)
            .role(.primary)
            .aria(.label, "Social icon for \(name)")
            .margin(.small)
    }
    
    var icon: Image {
        Image(systemName: "\(rawValue)", description: iconDescription)
    }
    
    var name: String {
        switch self {
        case .github: "GitHub"
        case .linkedin: "LinkedIn"
        case .instagram: "Instagram"
        }
    }
    
    var iconDescription: String {
        switch self {
        case .github: "GitHub icon"
        case .linkedin: "LinkedIn icon"
        case .instagram: "Instagram icon"
        }
    }
    
    var urlString: String {
        switch self {
        case .github: "https://github.com/giulianoaccorsi"
        case .linkedin: "https://linkedin.com/in/giulianoaccorsi/"
        case .instagram: "https://instagram.com/giuuaccorsi"
        }
    }
}

enum Project: String, CaseIterable, Sendable, InlineElement {
    case github, appStore
    
    var body: some InlineElement {
        Link(icon, target: urlString)
            .target(.newWindow)
            .relationship(.noOpener)
            .role(.primary)
            .margin(.small)
    }
    
    var icon: Image {
        Image(systemName: "\(rawValue)", description: iconDescription)
    }
    
    var iconDescription: String {
        switch self {
        case .github: "GitHub icon"
        case .appStore: "LinkedIn icon"
        }
    }
    
    var urlString: String {
        switch self {
        case .github: "GitHub icon"
        case .appStore: "LinkedIn icon"
        }
    }
}
