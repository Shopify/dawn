module Shared
  module ConsoleOutputs
    def self.environment
      Shared::ConsoleOutputs.header(true)
    end

    def self.debug_message(message)
      return unless $debug

      puts "DEBUG: #{message.to_s.colorize(:light_green)}"
    end

    def self.debug_message_item(message, item)
      return unless $debug

      puts "DEBUG: #{"#{message} (".colorize(:light_green)}#{item.to_s.colorize(:cyan)}#{')'.colorize(:light_green)}"
    end

    def self.error_message(message)
      puts "ERROR: #{message}".colorize(:light_red)
    end

    def self.error_message_item(message, item)
      puts "ERROR: #{message} (".colorize(:light_red) + item.to_s.colorize(:red) + ')'.colorize(:light_red)
    end

    def self.exclamation_sub_header(message)
      puts ''
      puts '*************************************************************************'.colorize(:light_green)
      puts '* '.colorize(:light_green) + message.to_s.colorize(:light_red)
      puts '*************************************************************************'.colorize(:light_green)
    end

    def self.footer(run_time)
      puts '------------------------------------------------------------------------'.colorize(:light_green)
      puts 'Workspace     ('.colorize(:light_green) + ($project_vars['terraform']['workspace']).to_s.colorize(:cyan) + ')'.colorize(:light_green)
      puts 'AWS Region    ('.colorize(:light_green) + ($project_vars['aws']['region']).to_s.colorize(:cyan) + ')'.colorize(:light_green)
      puts 'Run Time:     ('.colorize(:light_green) + run_time.to_s.colorize(:cyan) + ')'.colorize(:light_green)
    end

    def self.header(force = false)
      return unless $header_count.zero? || force

      environment_version = Shared::Vars.environment_version
      shared_version = Shared::Vars.shared_version
      # project_version = Shared::Vars.project_version

      puts ''
      puts 'Shared '.colorize(:light_green) + "v#{shared_version}".colorize(:cyan) + ' - '.colorize(:light_green) + "#{$project_vars['shared']['project'].gsub('_', ' ').gsub('-', ' ').capitalize} ".colorize(:light_green) + "#{$project_vars['shared']['environment'].gsub('_', ' ').gsub('-', ' ').capitalize} ".colorize(:light_green) + "v#{environment_version}".colorize(:cyan)
      puts '------------------------------------------------------------------------'.colorize(:light_green)
      Shared::ConsoleOutputs.message_item('Environment ', $project_vars['shared']['environment'])
      Shared::ConsoleOutputs.message_item('Profile     ', $project_vars['aws']['profile'])
      Shared::ConsoleOutputs.message_item('Region      ', $project_vars['aws']['region'])
      Shared::ConsoleOutputs.message_item('Roles       ', $project_vars['terraform']['roles'])
      Shared::ConsoleOutputs.message_item('Workspace   ', $project_vars['terraform']['workspace'])
      $header_count = 1
    end

    def self.highline_prompt_yellow(message)
      require 'highline'
      HighLine.agree("#{message}? (#{'y/n'.colorize(:light_yellow)}) ")
    end

    def self.highline_prompt_cyan(message)
      require 'highline'
      HighLine.agree("#{message}? (#{'y/n'.colorize(:cyan)}) ")
    end

    def self.highline_prompt_red(message)
      require 'highline'
      HighLine.agree("#{message}? (#{'y/n'.colorize(:light_red)}) ")
    end

    def self.info_message(message)
      # require 'colorize'
      puts "INFO: #{message.to_s.colorize(:light_green)}"
    end

    def self.info_message_item(message, item)
      puts "INFO: #{"#{message} (".colorize(:light_green)}#{item.to_s.colorize(:cyan)}#{')'.colorize(:light_green)}"
    end

    def self.message(message)
      puts message.colorize(:cyan)
    end

    def self.message_item(message, item)
      puts "#{message} (".colorize(:light_green) + item.to_s.colorize(:cyan) + ')'.colorize(:light_green)
    end

    def self.press_any_key(extra_text = false, action = '')
      require 'tty-prompt'
      if extra_text
        puts ''
        puts "/\\/\\ Check Values Above - About to Run (#{action}) /\\/\\".colorize(:yellow)
      end
      puts ''
      TTY::Prompt.new.keypress('Press any Key to Continue...')
    end

    def self.results(success, success_message, failed_message)
      if success
        Shared::ConsoleOutputs.message(success_message)
      else
        Shared::ConsoleOutputs.message('')
        Shared::ConsoleOutputs.error_message(failed_message)
      end
    end

    def self.results_item(success, success_message, failed_message, failed_item)
      if success
        Shared::ConsoleOutputs.message(success_message)
      else
        Shared::ConsoleOutputs.message('')
        Shared::ConsoleOutputs.error_message_item(failed_message, failed_item)
      end
    end

    def self.role_footer(action, role, run_time)
      puts '------------------------------------------------------------------------'.colorize(:light_green)
      puts 'Finished      ('.colorize(:light_green) + action.to_s.colorize(:cyan) + ')'.colorize(:light_green)
      puts 'Role          ('.colorize(:light_green) + role.to_s.colorize(:cyan) + ')'.colorize(:light_green)
      puts 'Run Time:     ('.colorize(:light_green) + run_time.to_s.colorize(:cyan) + ')'.colorize(:light_green)
    end

    def self.sub_header(message)
      puts ''
      puts '*************************************************************************'.colorize(:light_green)
      puts '* '.colorize(:light_green) + message.to_s.colorize(:cyan)
      puts '*************************************************************************'.colorize(:light_green)
    end

    def self.sub_header_item(message, item)
      puts ''
      puts '*************************************************************************'.colorize(:light_green)
      puts '* '.colorize(:light_green) + message.to_s.colorize(:cyan) + ' ('.colorize(:light_green) + item.to_s.colorize(:yellow) + ')'.colorize(:light_green)
      puts '*************************************************************************'.colorize(:light_green)
    end

    def self.time_diff(start_time, end_time)
      Time.at((start_time - end_time).round.abs).utc.strftime('%H:%M:%S')
    end

    def self.warning_message(message)
      puts "WARNING: #{message.to_s.colorize(:yellow)}"
    end

    def self.warning_message_item(message, item)
      puts "WARNING: #{"#{message} (".colorize(:yellow)}#{item.to_s.colorize(:cyan)}#{')'.colorize(:yellow)}"
    end

    def self.warning_sub_header(message)
      puts ''
      puts '*************************************************************************'.colorize(:light_green)
      puts '* '.colorize(:light_green) + message.to_s.colorize(:yellow)
      puts '*************************************************************************'.colorize(:light_green)
    end
  end
end
