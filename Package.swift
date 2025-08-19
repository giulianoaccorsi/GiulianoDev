// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "IgniteStarter",
    platforms: [.macOS(.v15)],
    dependencies: [
        .package(url: "https://github.com/twostraws/Ignite.git", branch: "main")
    ],
    targets: [
        .executableTarget(
            name: "GiulianoDev",
            dependencies: ["Ignite"],
            path: "Sources",
            resources: [.process("Resources/Colors.xcassets")]
        )
    ]
)
