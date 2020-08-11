(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[561],{859:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='# Code from http://sandbox.mc.edu/~bennet/ruby/code/poly_rb.html\n#\n# This program evaluates polynomials.  It first asks for the coefficients\n# of a polynomial, which must be entered on one line, highest-order first.\n# It then requests values of x and will compute the value of the poly for\n# each x.  It will repeatly ask for x values, unless you the user enters\n# a blank line.  It that case, it will ask for another polynomial.  If the\n# user types quit for either input, the program immediately exits.\n#\n\n#\n# Function to evaluate a polynomial at x.  The polynomial is given\n# as a list of coefficients, from the greatest to the least.\ndef polyval(x, coef)\n    sum = 0\n    coef = coef.clone           # Don\'t want to destroy the original\n    while true\n        sum += coef.shift       # Add and remove the next coef\n        break if coef.empty?    # If no more, done entirely.\n        sum *= x                # This happens the right number of times.\n    end\n    return sum\nend\n\n#\n# Function to read a line containing a list of integers and return\n# them as an array of integers.  If the string conversion fails, it\n# throws TypeError.  If the input line is the word \'quit\', then it\n# converts it to an end-of-file exception\ndef readints(prompt)\n    # Read a line\n    print prompt\n    line = readline.chomp\n    raise EOFError.new if line == \'quit\' # You can also use a real EOF.\n            \n    # Go through each item on the line, converting each one and adding it\n    # to retval.\n    retval = [ ]\n    for str in line.split(/\\s+/)\n        if str =~ /^\\-?\\d+$/\n            retval.push(str.to_i)\n        else\n            raise TypeError.new\n        end\n    end\n\n    return retval\nend\n\n#\n# Take a coeff and an exponent and return the string representation, ignoring\n# the sign of the coefficient.\ndef term_to_str(coef, exp)\n    ret = ""\n\n    # Show coeff, unless it\'s 1 or at the right\n    coef = coef.abs\n    ret = coef.to_s     unless coef == 1 && exp > 0\n    ret += "x" if exp > 0                               # x if exponent not 0\n    ret += "^" + exp.to_s if exp > 1                    # ^exponent, if > 1.\n\n    return ret\nend\n\n#\n# Create a string of the polynomial in sort-of-readable form.\ndef polystr(p)\n    # Get the exponent of first coefficient, plus 1.\n    exp = p.length\n\n    # Assign exponents to each term, making pairs of coeff and exponent,\n    # Then get rid of the zero terms.\n    p = (p.map { |c| exp -= 1; [ c, exp ] }).select { |p| p[0] != 0 }\n\n    # If there\'s nothing left, it\'s a zero\n    return "0" if p.empty?\n\n    # *** Now p is a non-empty list of [ coef, exponent ] pairs. ***\n\n    # Convert the first term, preceded by a "-" if it\'s negative.\n    result = (if p[0][0] < 0 then "-" else "" end) + term_to_str(*p[0])\n\n    # Convert the rest of the terms, in each case adding the appropriate\n    # + or - separating them.  \n    for term in p[1...p.length]\n        # Add the separator then the rep. of the term.\n        result += (if term[0] < 0 then " - " else " + " end) + \n                term_to_str(*term)\n    end\n\n    return result\nend\n        \n#\n# Run until some kind of endfile.\nbegin\n    # Repeat until an exception or quit gets us out.\n    while true\n        # Read a poly until it works.  An EOF will except out of the\n        # program.\n        print "\n"\n        begin\n            poly = readints("Enter a polynomial coefficients: ")\n        rescue TypeError\n            print "Try again.\n"\n            retry\n        end\n        break if poly.empty?\n\n        # Read and evaluate x values until the user types a blank line.\n        # Again, an EOF will except out of the pgm.\n        while true\n            # Request an integer.\n            print "Enter x value or blank line: "\n            x = readline.chomp\n            break if x == \'\'\n            raise EOFError.new if x == \'quit\'\n\n            # If it looks bad, let\'s try again.\n            if x !~ /^\\-?\\d+$/\n                print "That doesn\'t look like an integer.  Please try again.\n"\n                next\n            end\n\n            # Convert to an integer and print the result.\n            x = x.to_i\n            print "p(x) = ", polystr(poly), "\n"\n            print "p(", x, ") = ", polyval(x, poly), "\n"\n        end\n    end\nrescue EOFError\n    print "\n=== EOF ===\n"\nrescue Interrupt, SignalException\n    print "\n=== Interrupted ===\n"\nelse\n    print "--- Bye ---\n"\nend\n'}}]);
//# sourceMappingURL=561.c54d2b47.chunk.js.map