module Shared
  module Shell
    def self.clear_screen
      if RUBY_PLATFORM =~ /win32|win64|\.NET|windows|cygwin|mingw32/i
        system('cls')
      else
        system('clear')
      end
    end

    def self.run_command(command)
      # Will not show output until completed which sucks if want to watch the progress.
      require 'open3'
      require 'shellwords'
      # will run sh by default
      # out, err, status = Open3.capture3(command)
      out, err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")

      successful = status.success?
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command] Shell Command', command)
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command] Status', status)
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command] Standard Out', out)
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command] Successful?', successful)
      unless successful
        Shared::ConsoleOutputs.error_message('[Shared::Shell.run_command] Unsuccessful Command!')
        Shared::ConsoleOutputs.error_message_item('[Shared::Shell.run_command] Error Out', err)
      end
      successful
    end

    def self.run_command_no_output(command)
      # Will not show output, but will return boolean for success or fail.
      # i.e. We are using this to run a Terraform command with an expected error that we want to hide.
      require 'open3'
      require 'shellwords'
      # _out, _err, status = Open3.capture3(command))
      _out, _err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")
      status.success?
    end

    def self.run_command_strout(command)
      # Will not show output until completed which sucks if want to watch the progress.
      require 'open3'
      require 'shellwords'
      out, err, status = Open3.capture3("bash -c #{Shellwords.escape(command)}")
      successful = status.success?
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command_strout] Shell Command', command)
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command_strout] Status', status)
      # Shared::ConsoleOutputs.debug_message_item('Standard Out', out)
      Shared::ConsoleOutputs.debug_message_item('[Shared::Shell.run_command_strout] Successful?', successful)
      unless successful
        Shared::ConsoleOutputs.error_message('[Shared::Shell.run_command_strout] Unsuccessful Command!')
        Shared::ConsoleOutputs.error_message_item('[Shared::Shell.run_command_strout] Error Out', err)
      end
      out
    end
  end
end
