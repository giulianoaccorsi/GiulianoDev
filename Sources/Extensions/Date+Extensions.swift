//
//  Date+Extensions.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Foundation

extension Date {
    
    /// Returns year component based on gregorian calendar
    var year: Int {
        Calendar(identifier: .gregorian)
            .dateComponents([.year], from: self)
            .year!
    }
    
    /// Number of years since 2018.
    static var yearsOfExp: Int {
        Date().year - 2019
    }
}
