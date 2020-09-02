# def checkend(s)
#   # if s[0] == s[-1]
#   #   return true
#   # else
#   #   return false
#   # end
#   return s[0] == s[-1]
# end

def numeric_check(first_num)
  Float(first_num) != nil rescue false
end