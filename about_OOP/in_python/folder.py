class CodeMonkey(object):
  def __init__(self, your_name):
    self.s_name = your_name
  def makes_a_folder(self, folder_name):
    self.s_folder_name = folder_name
    return self
 
    
jeff = CodeMonkey('jeff')
print jeff.s_name
    
