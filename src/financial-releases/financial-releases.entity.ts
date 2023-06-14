import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'financial-releases' })
export class FinancialReleases {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  entryCash: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @Column({default: 'debito'})
  paymentMethod: string;
}