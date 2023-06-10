import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import React, { ForwardedRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface RegionSelectProps {
  regions: string[] | undefined;
  handleRegion: (v: string) => void;
}

const RegionSelect = ({ handleRegion, regions }: RegionSelectProps) => {
  // for radixui select.item click propagation fix
  const [open, setOpen] = useState(false);

  return (
    <Select.Root
      onValueChange={handleRegion}
      open={open}
      onOpenChange={e => setTimeout(() => setOpen(e.valueOf()))}
    >
      <Select.Trigger className='flex w-52 items-center justify-between gap-2 rounded-lg p-3 text-sm text-black shadow-md dark:bg-dark-2 dark:text-white sm:justify-self-end'>
        <Select.Value placeholder='Filter by region' />
        <Select.Icon>
          <BiChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className='w-52'>
        <Select.Content
          side='bottom'
          position='popper'
          className='overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:bg-dark-2'
        >
          <Select.Viewport className='p-[5px]'>
            <Select.Group>
              <SelectItem value='all'>All</SelectItem>
              {regions?.map(r => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: Select.SelectItemProps,
    forwardedRef: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Select.Item
        className={clsx(
          'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-sm leading-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:text-purple data-[highlighted]:outline-none dark:text-white dark:data-[highlighted]:text-purple',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export default RegionSelect;
